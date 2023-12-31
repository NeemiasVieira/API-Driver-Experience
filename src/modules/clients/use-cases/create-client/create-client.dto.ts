import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'The username of the user', example: "JoeD" })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  username: string;

  @ApiProperty({
    description: 'The email address of the user',
    example: 'joe@doe.com',
  })
  @IsNotEmpty({ message: 'Email is obligatory' })
  @IsEmail({}, { message: 'Email should be valid' })
  email: string;

  @ApiProperty({
    description: 'The password for the user',
    example: 'Password123!',
  })
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword({
    minLength: 8,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string;

  @ApiProperty({ description: 'The driver license number of the user', example: "4298715629" })
  @IsNotEmpty()
  @IsString()
  driverLicenseNumber: string;

  @ApiProperty({ description: 'The full name of the user' , example: "Joe Doe Caruso"})
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty({ description: 'The phone number of the user', example: "(13) 996020923" })
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;
}
