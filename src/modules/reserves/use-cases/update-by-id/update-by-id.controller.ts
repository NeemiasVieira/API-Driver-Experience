import { Controller, Patch, Body } from '@nestjs/common';
import { UpdateByIdService } from './update-by-id.service';
import { UpdateReserveByIdDto } from './update-by-id.dto';
import { Reserve } from '../../reserve.model';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';

  @ApiBearerAuth()
  @ApiTags("Reserves")
@Controller('reserves')
export class UpdateByIdController {
    constructor(private readonly appservice: UpdateByIdService){}

    @Patch()
    @ApiOperation({summary: "Update Reserve by Reserve ID"})
    @ApiResponse({
        status: 200,
        description: 'Return the updated Reserve',
    })
    @ApiResponse({
        status: 404,
        description: "Reserve doen't exists",
    })
    @ApiResponse({
        status: 451,
        description: "Your car is not available in this period!",
    })
    async updateReserveById(@Body() body : UpdateReserveByIdDto) : Promise<Reserve>{
        const { reserveId, startDate, endDate } = body;
        const updatedReserve = await this.appservice.updateReserveById(reserveId, startDate, endDate);
        return updatedReserve;
    }
}
