import { Controller, Delete, Param, Res } from '@nestjs/common';
import { DeleteReserveByIdService } from './delete-reserve-by-id.service';
import { Response } from 'express';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';

  @ApiBearerAuth()
  @ApiTags("Reserves")
@Controller('reserves')
export class DeleteReserveByIdController {
    constructor(private readonly appservice: DeleteReserveByIdService){}

    @Delete(':id')
    @ApiOperation({summary: "Delete reserve by ID"})
    @ApiResponse({
        status: 204,
        description: 'Delete sucess! Return void with status code No Content',
    })
    @ApiResponse({
        status: 404,
        description: 'Reserve not found',
    })
    async deleteReserveById(@Param('id') id: number, @Res() res: Response){
        await this.appservice.deleteReserveById(id);
        res.status(204).send();
        
    }
}
