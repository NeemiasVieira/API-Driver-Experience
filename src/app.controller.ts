import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserClient } from './modules/clients/client.model';
import { Client } from './modules/clients/client.model';

@Controller()
export class AppController {
  constructor(private readonly appservice: AppService) {}

  @Post()
  async register(@Body() newUser : UserClient): Promise<string> {
    await this.appservice.createUser(newUser);
    
    return this.appservice.getHello();
  }
}
