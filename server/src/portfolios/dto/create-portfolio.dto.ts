import { PortfolioEntity } from '../entities/portfolio.entity'
import { PickType } from '@nestjs/swagger'

export class CreatePortfolioDto extends PickType(PortfolioEntity, [
  'name',
  'url',
]) {}
