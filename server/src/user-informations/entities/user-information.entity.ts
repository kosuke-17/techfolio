import { UserInformation, GENDER } from '@prisma/client'
import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsEnum, IsString } from 'class-validator'
import { Type } from 'class-transformer'
import { PrismaEntity } from 'src/lib/prisma-entity'

export class UserInformationEntity extends PrismaEntity {
  @ApiProperty({ type: String })
  stuffId: UserInformation['stuffId']

  @ApiProperty({ type: Number })
  age: UserInformation['age']

  @IsString()
  @IsEnum(GENDER)
  @ApiProperty({ enum: GENDER, enumName: 'GENDER' })
  gender: UserInformation['gender']

  @ApiProperty({ type: String })
  nearestStation: UserInformation['nearestStation']

  @Type(() => Date)
  @IsDate()
  @ApiProperty({ type: Date })
  startWorkDate: UserInformation['startWorkDate']

  @ApiProperty({ type: Number })
  seExpAmount: UserInformation['seExpAmount']

  @ApiProperty({ type: Number })
  pgExpAmount: UserInformation['pgExpAmount']

  @ApiProperty({ type: Number })
  itExpAmount: UserInformation['itExpAmount']
}
