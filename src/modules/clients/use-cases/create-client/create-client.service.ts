import { HttpException, Injectable } from '@nestjs/common';
import { Client } from '../../client.model';
import { CreateUserDto } from './create-client.dto';
import { hash } from 'bcrypt';

@Injectable()
export class CreateClientService {
  async createUser(newUser: CreateUserDto): Promise<Client> {

    const userAlreadyExists = await Client.findOne({ where: { email: newUser.email } });

    if (userAlreadyExists) throw new HttpException("User already exists, try again!", 400);

    newUser.password = await hash(newUser.password, Number(process.env.PASSWORD_SALT));

    const newClient = await Client.create({ ...newUser });
    return newClient


  }
}
