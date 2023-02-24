import {
  Controller,
  Post,
  UseGuards,
  Req,
  HttpStatus,
  HttpCode,
} from '@nestjs/common'
import { ApiBody } from '@nestjs/swagger'
import { Request } from 'express'

import { LocalAuthGuard } from 'src/auth/local-auth.guard'
import { LoginDto } from 'src/users/dtos/login.dto'

@Controller()
export class AppController {
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: LoginDto })
  async login(@Req() req: Request) {
    return req.user
  }
}
