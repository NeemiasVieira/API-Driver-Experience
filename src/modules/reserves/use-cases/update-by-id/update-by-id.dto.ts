import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateReserveByIdDto{

    @IsNotEmpty()
    @IsNumber()
    reserveId: number;

    @IsNotEmpty()
    @IsString()
    startDate: string;
    
    @IsNotEmpty()
    @IsString()
    endDate: string;
}