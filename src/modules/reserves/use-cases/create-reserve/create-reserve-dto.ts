import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReserveDto {
  @ApiProperty({ description: 'The ID of the car to reserve' })
  @IsNotEmpty()
  @IsNumber()
  carId: number;

  @ApiProperty({
    description: 'The start date of the reservation (in ISO date string format)',
    format: 'date',
    example: '2023-09-04T12:00:00Z',
  })
  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @ApiProperty({
    description: 'The end date of the reservation (in ISO date string format)',
    format: 'date',
    example: '2023-11-29T00:00:01Z',
  })
  @IsNotEmpty()
  @IsDateString()
  endDate: string;
}
