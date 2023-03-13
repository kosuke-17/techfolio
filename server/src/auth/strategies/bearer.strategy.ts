import { Strategy } from 'passport-http-bearer'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'

import { UsersService } from 'src/users/users.service'
import { User } from '@prisma/client'

@Injectable()
export class BearerStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super()
  }

  async validate(token: string): Promise<Pick<User, 'id'>> {
    const { data: user } = await this.usersService.loginByToken(token)
    return user
  }
}
