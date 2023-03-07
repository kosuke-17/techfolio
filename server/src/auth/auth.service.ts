import { Injectable } from '@nestjs/common'
import { LoggerService } from 'src/logger/logger.service'
import { ResponseLoginUserDto } from 'src/users/dtos/response-login-user.dto'

import { UsersService } from 'src/users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly logger: LoggerService,
  ) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<ResponseLoginUserDto> {
    try {
      const user = await this.usersService.findOneByEmail(email)
      if (user && user.secret.password === pass) {
        const token = await this.usersService.createToken(user.id)
        return { ...user, secret: { ...user.secret, token } }
      }
    } catch (e) {
      this.logger.log(e)
    }
  }
}
