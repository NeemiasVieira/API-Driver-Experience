import { HttpException, Injectable } from '@nestjs/common';
import { UserClient } from '../../client.model';
import { Client } from '../../client.model';
import { hash } from 'bcrypt';
import { CreateUserDto } from './create-client.dto';

@Injectable()
export class CreateClientService {
    async createUser(newUser : CreateUserDto) : Promise<string>{

        const userAlreadyExists = await Client.findOne({where: {email: newUser.email}});
        if (userAlreadyExists) throw new HttpException("User already exists, try again!", 400);
        newUser.password = await hash(newUser.password, Number(process.env.PASSWORD_SALT));
        console.log({...newUser})
        await Client.create({...newUser});
        return `Successfully registered user, please Login ${newUser.username}`
    
    
      }
}
