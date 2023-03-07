import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'

import { AuthService } from 'src/auth/auth.service'
import { ResponseLoginUserDto } from 'src/users/dtos/response-login-user.dto'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' })
  }

  async validate(
    email: string,
    password: string,
  ): Promise<ResponseLoginUserDto> {
    const user = await this.authService.validateUser(email, password)
    if (!user) {
      throw new UnauthorizedException('パスワードが一致しませんでした')
    }
    return user
  }
}
