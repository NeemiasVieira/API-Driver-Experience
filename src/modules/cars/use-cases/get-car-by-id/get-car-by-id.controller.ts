import { Controller, Get, Param } from '@nestjs/common';
import { GetCarByIdService } from './get-car-by-id.service';
import { Car } from '../../car.model';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';

  @ApiTags('Cars') 
@Controller()
export class GetCarByIdController {
    constructor(private readonly appservice: GetCarByIdService) {}

    @Get('/cars/:id')
    @ApiOperation({ summary: 'Find Car By ID' })
    @ApiResponse({
        status: 200,
        description: 'Return the Car Object',
    })
    @ApiResponse({
        status: 404,
        description: 'Car not found',
    })
    async getCarById(@Param('id') id: number): Promise<Car> {
        return await this.appservice.getCarById(id);
    }
}
