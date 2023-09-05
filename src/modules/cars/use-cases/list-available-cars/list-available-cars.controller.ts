import { Body, Controller, Post, Query, Res } from '@nestjs/common';
import { ListAvailableCarsService } from './list-available-cars.service';
import { ListAvailableCarsDto } from './list-available-cars-dto';
import { Response } from 'express';
import {
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
import { QueryModel } from './list-available-cars.service';

@ApiTags("Cars")
@Controller('cars')
export class ListAvailableCarsController {
    constructor(private readonly appservice: ListAvailableCarsService) { }

    @Post('listAvailables')
    @ApiOperation({summary: "Lists the cars available in the period searched "})
    @ApiResponse({
        status: 200,
        description: 'Returns an array containing the list of available cars',
    })
    async listAvailableCars(@Body() carSearch: ListAvailableCarsDto, @Res() res: Response, @Query('model') query: QueryModel) {
        const { initialDate, finalDate } = carSearch;
        const response = await this.appservice.listAvailableCars(initialDate, finalDate, -1, query);
        res.status(200).send(response)
    }
}
