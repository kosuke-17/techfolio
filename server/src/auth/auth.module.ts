import { Module } from '@nestjs/common'
import { UsersModule } from 'src/users/users.module'
import { AuthService } from 'src/auth/auth.service'

@Module({
  imports: [UsersModule],
  providers: [AuthService],
})
export class AuthModule {}
