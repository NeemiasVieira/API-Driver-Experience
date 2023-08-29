import { Controller, Get, Request } from '@nestjs/common';
import { GetReserveByUserIdService } from './get-reserve-by-user-id.service';
import { Reserve } from '../../reserve.model';

@Controller('reserves')
export class GetReserveByUserIdController {
    constructor(private readonly appservice: GetReserveByUserIdService) {}

    @Get()
    async getReserveByUserId(@Request() req: any): Promise<Reserve[]> {

        //Require the userId from JWT
        const userId = Number(req.user.subject);

        const response = await this.appservice.getReserveByUserId(userId);
        return response

    }


}
