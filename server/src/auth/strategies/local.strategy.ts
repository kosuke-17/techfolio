import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'

import { AuthService } from 'src/auth/auth.service'
import { FindOneType } from 'src/users/users.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super()
  }

  async validate(id: string, password: string): Promise<FindOneType> {
    const user = await this.authService.validateUser(id, password)
    if (!user) {
      throw new UnauthorizedException()
    }

    console.log('ログイン成功🚀🚀🚀🚀')

    return user
  }
}
