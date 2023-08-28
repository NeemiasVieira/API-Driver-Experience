import { Body, Controller, Post } from '@nestjs/common';
import { ListAvailableCarsService } from './list-available-cars.service';
import { ListAvailableCarsDto } from './list-available-cars-dto';


@Controller()
export class ListAvailableCarsController {
    constructor(private readonly appservice: ListAvailableCarsService ){}

    @Post('listAvailableCars')
    async listAvailableCars(@Body() carSearch : ListAvailableCarsDto){
        const {initialDate, finalDate } = carSearch;
        return await this.appservice.listAvailableCars( initialDate, finalDate);
    }
}
