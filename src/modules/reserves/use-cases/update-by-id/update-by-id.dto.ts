import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateReserveByIdDto {
  @ApiProperty({ description: 'The ID of the reservation to update' })
  @IsNotEmpty()
  @IsNumber()
  reserveId: number;

  @ApiProperty({
    description: 'The new start date for the reservation (in ISO date string format)',
    example: '2023-09-04T12:00:00Z',
  })
  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @ApiProperty({
    description: 'The new end date for the reservation (in ISO date string format)',
    example: '2023-09-06T12:00:00Z',
  })
  @IsNotEmpty()
  @IsDateString()
  endDate: string;
}
