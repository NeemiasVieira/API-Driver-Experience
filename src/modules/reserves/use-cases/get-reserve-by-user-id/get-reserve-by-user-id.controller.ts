import { Controller, Get, Request } from '@nestjs/common';
import { GetReserveByUserIdService } from './get-reserve-by-user-id.service';
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
export class GetReserveByUserIdController {
    constructor(private readonly appservice: GetReserveByUserIdService) {}

    @Get()
    @ApiOperation({summary: "Get reserves by User ID"})
    @ApiResponse({
        status: 200,
        description: 'Return user reserves',
    })
    @ApiResponse({
        status: 404,
        description: 'Reserves not found',
    })
    async getReserveByUserId(@Request() req: any): Promise<Reserve[]> {

        //Require the userId from JWT
        const userId = Number(req.user.subject);

        const response = await this.appservice.getReserveByUserId(userId);
        return response

    }


}
