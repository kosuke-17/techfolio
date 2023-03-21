import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateUserInformationDto {
  @IsNotEmpty()
  @IsString()
  stuffId: string

  @IsNotEmpty()
  @IsNumber()
  age: number

  @IsNotEmpty()
  gender: 'MALE' | 'FEMALE'

  @IsNotEmpty()
  @IsString()
  nearestStation: string

  @IsNotEmpty()
  @IsDate()
  startWorkDate: Date

  @IsNotEmpty()
  @IsNumber()
  seExpAmount: number

  @IsNotEmpty()
  @IsNumber()
  pgExpAmount: number

  @IsNotEmpty()
  @IsNumber()
  itExpAmount: number
}
