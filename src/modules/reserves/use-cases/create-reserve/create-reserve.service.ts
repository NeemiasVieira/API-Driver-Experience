import { HttpException, Injectable } from '@nestjs/common';
import { Reserve } from '../../reserve.model';
import { Client } from 'src/modules/clients/client.model';
import { Car } from 'src/modules/cars/car.model';
import { CreateReserveDto } from './create-reserve-dto';
@Injectable()
export class CreateReserveService {
    async createReserve(userId: number, reserve: CreateReserveDto): Promise<Reserve> {

        const client = await Client.findOne({ where: { id: userId } });
        const car = await Car.findOne({ where: { id: reserve.carId } });

        if (!client || !car) {
            throw new HttpException('Client or car not found', 404);
        }

        let startDate: Date;
        let endDate: Date;
        try {
            startDate = new Date(reserve.startDate);
            endDate = new Date(reserve.endDate);
        } catch {
            throw new HttpException("Dates must be a string in the format ISO 8601", 400);
        }

        //Calculating the period of rent
        const periodInMilliSeconds = Math.abs(endDate.getTime() - startDate.getTime());
        const periodInDays = periodInMilliSeconds / (1000 * 60 * 60 * 24);
        const finalPeriod = Math.round(periodInDays);

        const newReserve = await Reserve.create({
            clientId: userId,
            carId: reserve.carId,
            startDate: reserve.startDate,
            endDate: reserve.endDate,
            totalDays: finalPeriod,
            totalCost: (car.dailyRate * finalPeriod),
            status: "confirmed"
        });

        await client.$add('reserves', newReserve);
        await car.$add('reserves', newReserve);

        return newReserve;
    }
}
