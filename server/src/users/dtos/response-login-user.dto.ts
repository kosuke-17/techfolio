import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { UserEntity } from '../entities/user.entity'
import { UserSecretEntity } from '../entities/userSecret.entity'

class SecretForResponseLoginUser extends UserSecretEntity {}

export class ResponseLoginUserDto extends UserEntity {
  @Type(() => SecretForResponseLoginUser)
  @ApiProperty({ type: SecretForResponseLoginUser })
  secret: UserSecretEntity
}
