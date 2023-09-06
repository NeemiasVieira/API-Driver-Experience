import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateReserveByIdDto {
  @ApiProperty({ description: 'The ID of the reservation to update' })
  @IsNotEmpty()
  @IsNumber()
  reserveId: number;

  @ApiProperty({
    description: 'The new start date for the reservation (in ISO date string format)',
    format: 'date',
    example: '2023-11-29T00:00:01Z',
  })
  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @ApiProperty({
    description: 'The new end date for the reservation (in ISO date string format)',
    format: 'date',
    example: '2023-11-29T00:00:01Z',
  })
  @IsNotEmpty()
  @IsDateString()
  endDate: string;
}
