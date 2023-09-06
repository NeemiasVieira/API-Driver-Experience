import { IsNotEmpty, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ListAvailableCarsDto {
  @ApiProperty({
    description: 'The initial date for checking car availability (in ISO date string format)',
    format: 'date',
    example: '2023-11-29T00:00:01Z',
  })
  @IsDateString()
  @IsNotEmpty()
  initialDate: string;

  @ApiProperty({
    description: 'The final date for checking car availability (in ISO date string format)',
    format: 'date',
    example: '2023-11-29T00:00:01Z',
  })
  @IsDateString()
  @IsNotEmpty()
  finalDate: string;
}
