import { Injectable } from '@nestjs/common';
import { compare } from "bcrypt"
import { Client } from '../../client.model';
import { HttpException } from '@nestjs/common/exceptions';

@Injectable()
export class LoginService {
    async login(email: string, password: string){
        const userExists = await Client.findOne({where: {email}});
        if(!userExists) throw new HttpException("User or password is incorrect", 400);
        const user = userExists;
        const passwordIsCorrect = await compare(password, user.password);
        if(!passwordIsCorrect) throw new HttpException("User or password is incorrect", 400);

        return `User ${user.username} successfully logged in`;
    }
}
