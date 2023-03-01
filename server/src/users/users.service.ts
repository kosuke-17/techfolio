import { Injectable, UnauthorizedException } from '@nestjs/common'
import { User, Prisma } from '@prisma/client'
import { v4 as uuid } from 'uuid'
// import bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma/prisma.service'
import { LoggerService } from 'src/logger/logger.service'
import { CreateUserDto } from './dtos/create-user.dto'

export type FindOneType = User & {
  secret: {
    password: string
  }
}

@Injectable()
export class UsersService {
  private readonly logger: LoggerService
  constructor(private prisma: PrismaService) {}

  async findOne({ email }: { email: string }): Promise<FindOneType | null> {
    try {
      const user = this.prisma.user.findFirst({
        where: { email },
        include: {
          secret: {
            select: { password: true },
          },
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

  async create(createUserDto: CreateUserDto): Promise<User> {
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

      return user
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
