import { Body, Controller, Get, Post } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { CreateUserDto } from "./create-client.dto"
import { CreateClientService } from './create-client.service';

@Controller()
export class CreateClientController {

    constructor(private readonly appserivce: CreateClientService){}

    @Post('signup')
  async register(@Body() newUser : CreateUserDto): Promise<string> {
    // if (!newUser.driverLicenseNumber || !newUser.email || !newUser.fullName || !newUser.password || !newUser.phoneNumber || !newUser.username){
    //   throw new HttpException("All fields are obligatory", 400);
    // }
    const response = await this.appserivce.createUser(newUser);
    return response;
  }
}
