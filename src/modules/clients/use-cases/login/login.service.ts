import { Injectable } from '@nestjs/common';
import { compare } from "bcrypt"
import { Client } from '../../client.model';

@Injectable()
export class LoginService {
    async login(email: string, password: string){
        const user = await Client.findOne({where: {email}});
        const result = await compare(password, user.password);
        console.log(result);
        return result;
    }
}
