import { Injectable } from '@nestjs/common'
import { LoggerService } from 'src/logger/logger.service'
import { CreatePortfolioDto } from 'src/portfolios/dto/create-portfolio.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { ResponseMeDto } from 'src/users/dtos/response-login-user.dto'

@Injectable()
export class PortfoliosService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: LoggerService,
  ) {}

  async create({
    user,
    createPortfolioDto,
  }: {
    user: Pick<ResponseMeDto, 'id'>
    createPortfolioDto: CreatePortfolioDto
  }) {
    try {
      await this.prisma.portfolio.create({
        data: {
          ...createPortfolioDto,
          user: { connect: { id: user.id } },
        },
      })
    } catch (e) {
      this.logger.error(e)
    }
  }
}
