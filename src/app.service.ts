import { HttpException, Injectable } from '@nestjs/common';
import { UserClient } from './modules/clients/client.model';
import { Client } from './modules/clients/client.model';
import { hash } from 'bcrypt';
import { CreateUserDto } from './modules/clients/use-cases/create-client/create-client.dto';
@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }
}
