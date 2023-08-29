import { Controller, Post, Body, Request } from '@nestjs/common';
import { CreateReserveService } from './create-reserve.service';
import { Reserve } from '../../reserve.model';
import { CreateReserveDto } from './create-reserve-dto';

@Controller('reserves')
export class CreateReserveController {
    constructor(private readonly appservice: CreateReserveService) {}

    @Post('/create')
    async createReserve(@Body() reserve: CreateReserveDto, @Request() req: any): Promise<Reserve> {
        //Require userID from JWT Token
        const userId = Number(req.user.subject);
        return await this.appservice.createReserve(userId, reserve);
    }

}
