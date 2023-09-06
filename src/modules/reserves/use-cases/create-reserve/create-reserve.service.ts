import { HttpException, Injectable } from '@nestjs/common';
import { Reserve } from '../../reserve.model';
import { Client } from 'src/modules/clients/client.model';
import { Car } from 'src/modules/cars/car.model';
import { CreateReserveDto } from './create-reserve-dto';
import { ListAvailableCarsService } from 'src/modules/cars/use-cases/list-available-cars/list-available-cars.service';
@Injectable()
export class CreateReserveService {
    async createReserve(userId: number, reserve: CreateReserveDto): Promise<Reserve> {

        const client = await Client.findOne({ where: { id: userId } });
        const car = await Car.findOne({ where: { id: reserve.carId } });
        
        if (!client || !car) {
            throw new HttpException('Client or car not found', 404);
        }

        const listAvailableCars = new ListAvailableCarsService();
        const availableCars = await listAvailableCars.listAvailableCars(reserve.startDate, reserve.endDate);
        const carIsAvailable = availableCars.find((car: Car) => car.id === reserve.carId);

        if(!carIsAvailable) throw new HttpException("The car is not available in the selected period", 409);
        
        const startDate: Date = new Date(reserve.startDate);
        const endDate: Date = new Date(reserve.endDate);       

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
