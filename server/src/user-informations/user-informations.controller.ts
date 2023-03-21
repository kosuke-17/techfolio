import { Body, Controller, Param, Post, Put, UseGuards } from '@nestjs/common'
import { BearerAuthGuard } from 'src/auth/bearer-auth.guard'
import { LoginUser } from 'src/auth/decolators/users.decorator'
import { ResponseMeDto } from 'src/users/dtos/response-login-user.dto'
import { CreateUserInformationDto } from './dtos/create-user-information.dto'
import { UpdateUserInformationDto } from './dtos/update-user-information.dto'
import { UserInformationsService } from './user-informations.service'

@Controller('user-informations')
@UseGuards(BearerAuthGuard)
export class UserInformationsController {
  constructor(
    private readonly userInformationsService: UserInformationsService,
  ) {}

  @Post()
  async create(
    @LoginUser() user: ResponseMeDto,
    @Body() createUserDto: CreateUserInformationDto,
  ): Promise<void> {
    this.userInformationsService.create(user, createUserDto)
  }

  @Put(':id')
  async update(
    @LoginUser() user: ResponseMeDto,
    @Body() updateUserInformationDto: UpdateUserInformationDto,
    @Param('id') id: string,
  ): Promise<void> {
    this.userInformationsService.update(id, user, updateUserInformationDto)
  }
}
