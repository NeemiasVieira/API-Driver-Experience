import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserClient } from './modules/clients/client.model';
import { HttpException } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appservice: AppService) {}

  @Post('signup')
  async register(@Body() newUser : UserClient): Promise<string> {
    if (!newUser.driverLicenseNumber || !newUser.email || !newUser.fullName || !newUser.password || !newUser.phoneNumber || !newUser.username){
      throw new HttpException("All fields are obligatory", 400);
    }
    const response = await this.appservice.createUser(newUser);
    return response;
  }
}
