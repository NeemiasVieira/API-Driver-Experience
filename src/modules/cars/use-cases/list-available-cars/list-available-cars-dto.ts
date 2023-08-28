import { IsNotEmpty, IsInt, IsDateString } from 'class-validator';

export class ListAvailableCarsDto {
    
  @IsDateString()
  @IsNotEmpty()
  initialDate: string;

  @IsDateString()
  @IsNotEmpty()
  finalDate: string;
}