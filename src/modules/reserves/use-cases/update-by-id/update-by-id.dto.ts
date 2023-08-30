import { IsNotEmpty, IsNumber, IsDateString } from "class-validator";

export class UpdateReserveByIdDto{

    @IsNotEmpty()
    @IsNumber()
    reserveId: number;

    @IsNotEmpty()
    @IsDateString()
    startDate: string;
    
    @IsNotEmpty()
    @IsDateString()
    endDate: string;
}