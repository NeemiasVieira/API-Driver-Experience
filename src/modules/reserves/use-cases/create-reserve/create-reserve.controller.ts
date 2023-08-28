import { Controller, Post, Body } from '@nestjs/common';
import { CreateReserveService } from './create-reserve.service';
import { Reserve } from '../../reserve.model';

@Controller('create-reserve')
export class CreateReserveController {
    constructor(private readonly appservice: CreateReserveService){}
    @Post()
        async createReserve(@Body() reserve: Reserve) : Promise<Reserve>{
            return await this.appservice.createReserve(reserve);
        }
}
