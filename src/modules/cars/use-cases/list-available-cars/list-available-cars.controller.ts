import { Body, Controller, Post, Res } from '@nestjs/common';
import { ListAvailableCarsService } from './list-available-cars.service';
import { ListAvailableCarsDto } from './list-available-cars-dto';
import { Response } from 'express';

@Controller('cars')
export class ListAvailableCarsController {
    constructor(private readonly appservice: ListAvailableCarsService) { }

    @Post('listAvailables')
    async listAvailableCars(@Body() carSearch: ListAvailableCarsDto, @Res() res: Response) {
        const { initialDate, finalDate } = carSearch;
        const response = await this.appservice.listAvailableCars(initialDate, finalDate);
        res.status(200).send(response)
    }
}
