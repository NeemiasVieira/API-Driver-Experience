import { Controller, Get } from '@nestjs/common';
import { Reserve } from './modules/reserves/reserve.model';
import { Car } from './modules/cars/car.model';

@Controller()
export class AppController {

  @Get('teste')
  async teste() {

    const cars = await Car.findAll({include: Reserve});    
    return cars;

  }
}
