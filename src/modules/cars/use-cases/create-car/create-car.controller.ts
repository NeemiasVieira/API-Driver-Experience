import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { CreateCarService } from './create-car.service';
import { CreateCarDto } from './create-car-dto';
import { Car } from '../../car.model';

@Controller('cars')
export class CreateCarController {

    constructor(private readonly appservice: CreateCarService) { }

    @Post('/create')
    async createCar(@Body() car: CreateCarDto): Promise<Car> {
        const createdCar = await this.appservice.createCar(car);
        return createdCar;
    }
}
