import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'

import { CreateUserDto } from './dtos/create-user.dto'
import { UserCreateResponseDto } from './dtos/response-create-user.dto'
import { UserResponseDto } from './dtos/response-user.dto'
import { UpdateUserSecretDto } from './dtos/update-user-secret.dto'
import { UsersService } from './users.service'

@Controller('users')
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

  @Put('/logout')
  async logout(
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
