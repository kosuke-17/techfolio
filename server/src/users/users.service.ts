import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { User, Prisma, UserSecret } from '@prisma/client'
import { v4 as uuid } from 'uuid'
// import bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma/prisma.service'
import { LoggerService } from 'src/logger/logger.service'
import { CreateUserDto } from './dtos/create-user.dto'

export type FindOneType = User & { secret: UserSecret }

@Injectable()
export class UsersService {
  private readonly logger: LoggerService
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<FindOneType | null> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { id },
        include: {
          secret: true,
        },
      })
      return user
    } catch (e) {
      this.logger.log(e)
    }
  }

  async findOneByEmail(email: string): Promise<FindOneType | null> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { email },
        include: {
          secret: true,
        },
      })
      return user
    } catch (e) {
      this.logger.log(e)
    }
  }

  async loginByToken(token: string) {
    const userSecret = await this.prisma.userSecret.findFirst({
      where: { token },
      include: { user: true },
    })

    if (!userSecret) {
      throw new UnauthorizedException('user not found when login by token')
    }

    return { data: userSecret.user }
  }

  async logout(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    })
    if (!user) throw new NotFoundException('user not found')

    await this.prisma.userSecret.update({
      where: { userId: user.id },
      data: {
        token: null,
      },
    })
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.prisma.user.findMany()
    } catch (e) {
      this.logger.log(e)
    }
  }

  // なせかエラー
  // async generateHash(password: string): Promise<string> {
  //   const hash = await bcrypt.hash(password, 10)
  //   return hash
  // }

  async create(createUserDto: CreateUserDto) {
    const { password, ...rest } = createUserDto
    // const hash = await this.generateHash(password)

    try {
      const user = await this.prisma.user.create({
        data: { ...rest },
      })

      await this.prisma.userSecret.create({
        data: {
          token: uuid(),
          password,
          user: { connect: { id: user.id } },
        },
      })

      return this.prisma.user.findUnique({
        where: { id: user.id },
        select: {
          id: true,
          secret: { select: { token: true } },
        },
      })
    } catch (e) {
      // ログ出るか確認
      this.logger.log(e)
    }
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput
    data: Prisma.UserUpdateInput
  }): Promise<User> {
    const { where, data } = params
    return this.prisma.user.update({
      data,
      where,
    })
  }

  async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    })
  }
}
