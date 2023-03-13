import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common'
import { User } from '@prisma/client'
import { BearerAuthGuard } from 'src/auth/bearer-auth.guard'

import { CreateUserDto } from './dtos/create-user.dto'
import { UserCreateResponseDto } from './dtos/response-create-user.dto'
import { UserResponseDto } from './dtos/response-user.dto'
import { UpdateUserSecretDto } from './dtos/update-user-secret.dto'
import { LoginUser } from './users.decorator'
import { UsersService } from './users.service'

@Controller('users')
@UseGuards(BearerAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<UserResponseDto[]> {
    return this.usersService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.findOne(id)
  }

  @Put('logout')
  async logout(
    @LoginUser() user: User,
    @Body() updateUserSecretDto: UpdateUserSecretDto,
  ): Promise<void> {
    this.usersService.logoutByToken(updateUserSecretDto)
  }

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserCreateResponseDto> {
    return this.usersService.create(createUserDto)
  }
}
