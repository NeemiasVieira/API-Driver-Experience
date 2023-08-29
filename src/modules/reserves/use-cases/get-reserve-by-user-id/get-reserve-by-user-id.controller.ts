import { Controller, Get, Post, Request } from '@nestjs/common';
import { GetReserveByUserIdService } from './get-reserve-by-user-id.service';

@Controller('reserves')
export class GetReserveByUserIdController {
    constructor(private readonly appservice: GetReserveByUserIdService){}

    @Get()
    async getReserveByUserId(@Request() req : any){
        const userId = Number(req.user.subject);
        const response = await this.appservice.getReserveByUserId(userId);
        return response

    }


}
