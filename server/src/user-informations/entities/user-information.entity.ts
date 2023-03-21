import { UserInformation } from '@prisma/client'
import { ApiProperty } from '@nestjs/swagger'

export class UserInformationEntity {
  @ApiProperty({ type: String })
  id: UserInformation['id']

  @ApiProperty({ type: Date })
  createdAt: UserInformation['createdAt']

  @ApiProperty({ type: Date })
  updatedAt: UserInformation['updatedAt']

  @ApiProperty({ type: String })
  stuffId: UserInformation['stuffId']

  @ApiProperty({ type: Number })
  age: UserInformation['age']

  @ApiProperty({ type: Number })
  gender: UserInformation['gender']

  @ApiProperty({ type: Number })
  nearestStation: UserInformation['nearestStation']

  @ApiProperty({ type: Number })
  startWorkDate: UserInformation['startWorkDate']

  @ApiProperty({ type: Number })
  seExpAmount: UserInformation['seExpAmount']

  @ApiProperty({ type: Number })
  pgExpAmount: UserInformation['pgExpAmount']

  @ApiProperty({ type: Number })
  itExpAmount: UserInformation['itExpAmount']
}
