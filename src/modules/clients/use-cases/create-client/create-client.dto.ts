import { IsEmail, IsNotEmpty, IsString, MinLength, IsStrongPassword} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty({
        message: "email is obligatory"
    })
    @IsEmail({},
        {message: "email should be valid"}
    )
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @IsStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    })
    password: string;

    @IsNotEmpty()
    @IsString()
    driverLicenseNumber: string;

    @IsNotEmpty()
    @IsString()
    fullName: string;

    @IsNotEmpty()
    @IsString()
    phoneNumber: string;
}




