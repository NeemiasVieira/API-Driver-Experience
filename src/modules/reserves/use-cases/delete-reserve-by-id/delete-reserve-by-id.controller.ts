import { Controller, Delete, Param, Res } from '@nestjs/common';
import { DeleteReserveByIdService } from './delete-reserve-by-id.service';
import { Response } from 'express';

@Controller('reserves')
export class DeleteReserveByIdController {
    constructor(private readonly appservice: DeleteReserveByIdService){}

    @Delete(':id')
    async deleteReserveById(@Param('id') id: number, @Res() res: Response){
        await this.appservice.deleteReserveById(id);
        res.status(204).send();
        
    }
}
