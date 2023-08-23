import { Injectable } from '@nestjs/common';
import { UserClient } from './modules/clients/client.model';
import { Client } from './modules/clients/client.model';
import { hash } from 'bcrypt';
@Injectable()
export class AppService {

  async createUser(newUser : UserClient){
    const {
      username,
      email,
      password,
      driverLicenseNumber,
      fullName,
      phoneNumber,
    } = newUser

    newUser.password = await hash(newUser.password, Number(process.env.PASSWORD_SALT));
    console.log({...newUser})

    await Client.create({...newUser});

  }


  getHello(): string {
    return 'Hello World!';
  }
}
