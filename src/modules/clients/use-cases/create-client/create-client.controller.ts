import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from "./create-client.dto"
import { CreateClientService } from './create-client.service';
import { Client } from '../../client.model';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags("Clients")
@Controller()
export class CreateClientController {

  constructor(private readonly appserivce: CreateClientService) {}

  @Post('signup')
  @ApiOperation({summary: "Register a new user"})
  @ApiResponse({
    status: 201,
    description: 'Return the new Client',
})
@ApiResponse({
  status: 400,
  description: 'User already exists',
})
  async register(@Body() newUser: CreateUserDto): Promise<Client> {

    const response = await this.appserivce.createUser(newUser);
    return response;

  }
}
