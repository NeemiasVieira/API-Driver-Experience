import { IsBoolean, IsNumber, IsString, ArrayNotEmpty, ArrayMinSize, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty({ description: 'The model of the car' })
  @IsNotEmpty()
  @IsString()
  model: string;

  @ApiProperty({ description: 'The plate number of the car' })
  @IsNotEmpty()
  @IsString()
  plateNumber: string;

  @ApiProperty({ description: 'The manufacturing year of the car' })
  @IsNotEmpty()
  @IsNumber()
  year: number;

  @ApiProperty({ description: 'Whether the car is automatic or not' })
  @IsNotEmpty()
  @IsBoolean()
  isAutomatic: boolean;

  @ApiProperty({ description: 'The type of the car' })
  @IsNotEmpty()
  @IsString()
  carType: string;

  @ApiProperty({ description: 'The color of the car' })
  @IsNotEmpty()
  @IsString()
  color: string;

  @ApiProperty({ description: 'The fuel efficiency of the car in miles per gallon' })
  @IsNotEmpty()
  @IsNumber()
  fuelEfficiency: number;

  @ApiProperty({ description: 'The daily rental rate of the car' })
  @IsNotEmpty()
  @IsNumber()
  dailyRate: number;

  @ApiProperty({ description: 'An array of image URLs of the car' })
  @IsNotEmpty()
  @ArrayNotEmpty()
  images: string[];

  @ApiProperty({ description: 'An array of features of the car' })
  @IsNotEmpty()
  @ArrayMinSize(1)
  features: string[];
}
