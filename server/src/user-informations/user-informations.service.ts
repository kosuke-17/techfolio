import { Injectable, NotFoundException } from '@nestjs/common'
import { LoggerService } from 'src/logger/logger.service'
import { PrismaService } from 'src/prisma/prisma.service'
import { ResponseMeDto } from 'src/users/dtos/response-login-user.dto'
import { CreateUserInformationDto } from './dtos/create-user-information.dto'
import { UpdateUserInformationDto } from './dtos/update-user-information.dto'

@Injectable()
export class UserInformationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: LoggerService,
  ) {}

  async create(
    user: Pick<ResponseMeDto, 'id'>,
    createUserInformationDto: CreateUserInformationDto,
  ) {
    try {
      await this.prisma.userInformation.create({
        data: {
          ...createUserInformationDto,
          user: { connect: { id: user.id } },
        },
      })
    } catch (e) {
      this.logger.error(e)
    }
  }

  async update(
    id: string,
    user: Pick<ResponseMeDto, 'id'>,
    updateUserInformationDto: UpdateUserInformationDto,
  ) {
    const userInformation = this.prisma.userInformation.findFirst({
      where: { id, userId: user.id },
    })
    if (!userInformation)
      throw new NotFoundException('user information not found')
    try {
      await this.prisma.userInformation.update({
        where: { id },
        data: { ...updateUserInformationDto },
      })
    } catch (e) {
      this.logger.error(e)
    }
  }
}
