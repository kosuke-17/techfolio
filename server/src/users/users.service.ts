import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { User, Prisma } from '@prisma/client'
import { LoggerService } from 'src/logger/logger.service'

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

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    })
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
