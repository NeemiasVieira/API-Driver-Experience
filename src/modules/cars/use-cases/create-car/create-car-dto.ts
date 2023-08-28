import { IsBoolean, IsNumber, IsString, ArrayNotEmpty, ArrayMinSize } from 'class-validator';

export class CreateCarDto {
  @IsString()
  model: string;

  @IsString()
  plateNumber: string;

  @IsNumber()
  year: number;

  @IsBoolean()
  isAutomatic: boolean;

  @IsString()
  carType: string;

  @IsString()
  color: string;

  @IsNumber()
  fuelEfficiency: number;

  @IsNumber()
  dailyRate: number;

  @ArrayNotEmpty()
  images: string[];

  @ArrayMinSize(1)
  features: string[];
}
