import { IsBoolean, IsNumber, IsString, ArrayNotEmpty, ArrayMinSize, IsNotEmpty } from 'class-validator';

export class CreateCarDto {
  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  plateNumber: string;

  @IsNotEmpty()
  @IsNumber()
  year: number;

  @IsNotEmpty()
  @IsBoolean()
  isAutomatic: boolean;

  @IsNotEmpty()
  @IsString()
  carType: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsNumber()
  fuelEfficiency: number;

  @IsNotEmpty()
  @IsNumber()
  dailyRate: number;

  @IsNotEmpty()
  @ArrayNotEmpty()
  images: string[];

  @IsNotEmpty()
  @ArrayMinSize(1)
  features: string[];
}
