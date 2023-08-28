import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { CreateCarService } from './create-car.service';
import { CreateCarDto } from './create-car-dto';

@Controller('create-car')
export class CreateCarController {

    constructor(private readonly appservice: CreateCarService ){}

    @Post()
    async createCar(@Body() car : CreateCarDto) : Promise<string>{
        const result = await this.appservice.createCar(car);
        return result;
        
    }
}
