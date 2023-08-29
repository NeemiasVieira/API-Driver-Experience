import { Controller, Get, Param } from '@nestjs/common';
import { GetCarByIdService } from './get-car-by-id.service';
import { Car } from '../../car.model';

@Controller()
export class GetCarByIdController {
    constructor(private readonly appservice: GetCarByIdService){}
    
    @Get('/cars/:id')
    async getCarById(@Param('id') id: number) : Promise<Car>{
        return await this.appservice.getCarById(id);
    }
}
