import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { CarType } from '../../car.model';
import { CreateCarService } from './create-car.service';

@Controller('create-car')
export class CreateCarController {

    constructor(private readonly appservice: CreateCarService ){}

    @Post()
    async createCar(@Body() car : CarType) : Promise<string>{
        if(!car.carType || !car.color || !car.dailyRate || !car.features || !car.fuelEfficiency || !car.images || !car.isAutomatic || !car.model || !car.plateNumber || !car.reserves || !car.year){
            throw new HttpException("All fields are obligatory", 400);
        }
        const result = await this.appservice.createCar(car);
        return result;
        
    }
}
