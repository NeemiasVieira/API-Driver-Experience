import { HttpException, Injectable } from '@nestjs/common';
import { UserClient } from './modules/clients/client.model';
import { Client } from './modules/clients/client.model';
import { hash } from 'bcrypt';
@Injectable()
export class AppService {

  async createUser(newUser : UserClient) : Promise<string>{

    const userAlreadyExists = await Client.findOne({where: {email: newUser.email}});
    if (userAlreadyExists) throw new HttpException("User already exists, try again!", 400);
    newUser.password = await hash(newUser.password, Number(process.env.PASSWORD_SALT));
    console.log({...newUser})
    await Client.create({...newUser});
    return `Successfully registered user, please Login ${newUser.username}`


  }

  getHello(): string {
    return 'Hello World!';
  }
}
