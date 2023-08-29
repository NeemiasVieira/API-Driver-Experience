import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReserveDto{
    @IsNotEmpty()
    @IsNumber()
    carId: number;

    @IsNotEmpty()
    @IsString()
    startDate: string;

    @IsNotEmpty()
    @IsString()
    endDate: string;
}