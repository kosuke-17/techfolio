import { CreatePortfolioDto } from './dto/create-portfolio.dto'
import { PortfoliosService } from './portfolios.service'
import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { BearerAuthGuard } from 'src/auth/bearer-auth.guard'
import { LoginUser } from 'src/auth/decolators/users.decorator'
import { ResponseMeDto } from 'src/users/dtos/response-login-user.dto'

@UseGuards(BearerAuthGuard)
@Controller('portfolios')
export class PortfoliosController {
  constructor(readonly portfoliosService: PortfoliosService) {}

  @Post()
  async create(
    @LoginUser() user: ResponseMeDto,
    @Body() createPortfolioDto: CreatePortfolioDto,
  ) {
    await this.portfoliosService.create({ user, createPortfolioDto })
  }
}
