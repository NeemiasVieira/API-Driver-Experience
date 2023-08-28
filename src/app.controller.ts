import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Client } from './modules/clients/client.model';
import { HttpException } from '@nestjs/common';
import { CreateUserDto } from './modules/clients/use-cases/create-client/create-client.dto';
import { Reserve } from './modules/reserves/reserve.model';
import { Car } from './modules/cars/car.model';

@Controller()
export class AppController {
  constructor(private readonly appservice: AppService) {}

  

  @Get('teste')
  async teste() {

    // const client = await Client.findOne({ where: { id: 1 }, include: Reserve });
    // await client.reload({ include: Reserve });

    const cars = await Car.findAll({include: Reserve});



    
    return cars;
  }
}
