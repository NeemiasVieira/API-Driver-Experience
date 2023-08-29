import { Injectable } from '@nestjs/common';
import { compare } from "bcrypt"
import { Client } from '../../client.model';
import { HttpException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './login-dto';

@Injectable()
export class LoginService {

    constructor(private jwtService: JwtService) {}

    async login({ email, password }: LoginUserDto) {
        const userExists = await Client.findOne({ where: { email } });

        if (!userExists) throw new HttpException("User or password is incorrect", 400);

        const userOnDataBase = userExists;

        const passwordIsCorrect = await compare(password, userOnDataBase.password);
        if (!passwordIsCorrect) throw new HttpException("User or password is incorrect", 400);

        //In the token the user ID is passed for future uses in the application
        const token = this.jwtService.sign({}, { secret: process.env.JWT_SECRET, subject: String(userExists.id) });

        return {
            message: "Login success",
            user: userOnDataBase,
            token: token
        };
    }

}
