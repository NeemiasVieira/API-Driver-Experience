import { Body, Controller, Get, Post } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { CreateUserDto } from "./create-client.dto"
import { CreateClientService } from './create-client.service';
import { Client } from '../../client.model';

@Controller()
export class CreateClientController {

  constructor(private readonly appserivce: CreateClientService) {}

  @Post('signup')
  async register(@Body() newUser: CreateUserDto): Promise<Client> {

    const response = await this.appserivce.createUser(newUser);
    return response;

  }
}
