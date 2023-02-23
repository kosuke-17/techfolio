import { Injectable } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(id: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({ id })
    if (user && user.secret.password === pass) {
      delete user.secret.password
      return user
    }
    return null
  }
}
