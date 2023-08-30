import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateReserveDto{
    @IsNotEmpty()
    @IsNumber()
    carId: number;

    @IsNotEmpty()
    @IsDateString()
    startDate: string;

    @IsNotEmpty()
    @IsDateString()
    endDate: string;
}