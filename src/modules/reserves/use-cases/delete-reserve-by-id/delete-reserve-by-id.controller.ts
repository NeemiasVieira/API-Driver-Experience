import { Controller, Delete, Param, Res } from '@nestjs/common';
import { DeleteReserveByIdService } from './delete-reserve-by-id.service';
import { Response, response } from 'express';

@Controller('reserves')
export class DeleteReserveByIdController {
    constructor(private readonly appservice: DeleteReserveByIdService){}

    @Delete('/delete/:id')
    async deleteReserveById(@Param('id') id: number, @Res() res: Response){
        await this.appservice.deleteReserveById(id);
        res.status(201).send();
        
    }
}
