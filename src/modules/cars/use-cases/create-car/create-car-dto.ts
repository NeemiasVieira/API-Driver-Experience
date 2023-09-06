import { IsBoolean, IsNumber, IsString, ArrayNotEmpty, ArrayMinSize, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty({ description: 'The model of the car', example: "HB20 1.0 Turbo" })
  @IsNotEmpty()
  @IsString()
  model: string;

  @ApiProperty({ description: 'The plate number of the car', example: "FZA9372" })
  @IsNotEmpty()
  @IsString()
  plateNumber: string;

  @ApiProperty({ description: 'The manufacturing year of the car', example: "2023" })
  @IsNotEmpty()
  @IsNumber()
  year: number;

  @ApiProperty({ description: 'Whether the car is automatic or not', example: true})
  @IsNotEmpty()
  @IsBoolean()
  isAutomatic: boolean;

  @ApiProperty({ description: 'The type of the car', example: "Sedan" })
  @IsNotEmpty()
  @IsString()
  carType: string;

  @ApiProperty({ description: 'The color of the car', example: "Blue" })
  @IsNotEmpty()
  @IsString()
  color: string;

  @ApiProperty({ description: 'The fuel efficiency of the car in km/L', example: 30 })
  @IsNotEmpty()
  @IsNumber()
  fuelEfficiency: number;

  @ApiProperty({ description: 'The daily rental rate of the car', example: 80})
  @IsNotEmpty()
  @IsNumber()
  dailyRate: number;

  @ApiProperty({ description: 'An array of image URLs of the car', example: ["https://example.com/img1", "https://example.com/img2"]})
  @IsNotEmpty()
  @ArrayNotEmpty()
  images: string[];

  @ApiProperty({ description: 'An array of features of the car', example: ["Air Conditioning", "Power Steering", "Touchscreen Display"] })
  @IsNotEmpty()
  @ArrayMinSize(1)
  features: string[];
}
