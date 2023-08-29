import { Controller, Patch, Body } from '@nestjs/common';
import { UpdateByIdService } from './update-by-id.service';
import { UpdateReserveByIdDto } from './update-by-id.dto';
import { Reserve } from '../../reserve.model';

@Controller('reserve')
export class UpdateByIdController {
    constructor(private readonly appservice: UpdateByIdService){}

    @Patch()
    async updateReserveById(@Body() body : UpdateReserveByIdDto) : Promise<Reserve>{
        const { reserveId, startDate, endDate } = body;
        return await this.appservice.updateReserveById(reserveId, startDate, endDate);
    }
}
