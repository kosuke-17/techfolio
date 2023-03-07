import { Injectable } from '@nestjs/common'

import { FindOneType, UsersService } from 'src/users/users.service'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<FindOneType> {
    try {
      const user = await this.usersService.findOneByEmail(email)
      if (user && user.secret.password === pass) {
        return user
      }
    } catch (error) {
      console.error(error)
    }
  }
}
