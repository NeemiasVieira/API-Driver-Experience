import { Controller, Post, Body, Request } from '@nestjs/common';
import { CreateReserveService } from './create-reserve.service';
import { Reserve } from '../../reserve.model';
import { CreateReserveDto } from './create-reserve-dto';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';

  @ApiBearerAuth()
  @ApiTags("Reserves")
@Controller('reserves')
export class CreateReserveController {
    constructor(private readonly appservice: CreateReserveService) {}

    @Post('/create')
    @ApiOperation({summary: "Create a new Reserve"})
    @ApiResponse({
        status: 201,
        description: 'Return the new Reserve',
    })
    @ApiResponse({
        status: 404,
        description: 'Client or car not found',
    })

    async createReserve(@Body() reserve: CreateReserveDto, @Request() req: any): Promise<Reserve> {
        //Require userID from JWT Token
        const userId = Number(req.user.subject);
        return await this.appservice.createReserve(userId, reserve);
    }

}
