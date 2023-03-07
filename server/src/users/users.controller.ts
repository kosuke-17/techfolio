import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'

import { CreateUserDto } from './dtos/create-user.dto'
import { UserCreateResponseDto } from './dtos/response-create-user.dto'
import { UserResponseDto } from './dtos/response-user.dto'
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

  @Put(':id/logout')
  async logout(@Param('id') id: string): Promise<void> {
    this.usersService.logout(id)
  }

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserCreateResponseDto> {
    return this.usersService.create(createUserDto)
  }
}
