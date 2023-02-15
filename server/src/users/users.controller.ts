import { Body, Controller, Get, Param, Post } from '@nestjs/common'

import { CreateUserDto } from './dtos/create-user.dto'
import { UserResponseDto } from './dtos/response-user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<UserResponseDto[]> {
    return this.usersService.findAll()
  }
  @Get('id')
  async findOne(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.findOne({ id })
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }
}
