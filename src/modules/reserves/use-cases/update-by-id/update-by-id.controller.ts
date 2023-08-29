import { Controller, Patch, Body } from '@nestjs/common';
import { UpdateByIdService } from './update-by-id.service';
import { UpdateReserveByIdDto } from './update-by-id.dto';
import { Reserve } from '../../reserve.model';

@Controller('reserves')
export class UpdateByIdController {
    constructor(private readonly appservice: UpdateByIdService){}

    @Patch()
    async updateReserveById(@Body() body : UpdateReserveByIdDto) : Promise<Reserve>{
        const { reserveId, startDate, endDate } = body;
        const updatedReserve = await this.appservice.updateReserveById(reserveId, startDate, endDate);
        return updatedReserve;
    }
}
