import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { CreateCarService } from './create-car.service';
import { CreateCarDto } from './create-car-dto';
import { Car } from '../../car.model';
import {
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

@ApiTags("Cars")
@Controller('cars')
export class CreateCarController {

    constructor(private readonly appservice: CreateCarService) { }
    @Post('/create')
    @ApiOperation({ summary: "Create car" })
    @ApiResponse({
        status: 200,
        description: 'Return the new Car',
    })
    async createCar(@Body() car: CreateCarDto): Promise<Car> {
        const createdCar = await this.appservice.createCar(car);
        return createdCar;
    }
}
