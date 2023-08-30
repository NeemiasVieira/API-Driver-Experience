import { Injectable, HttpException } from '@nestjs/common';
import { ListAvailableCarsService } from 'src/modules/cars/use-cases/list-available-cars/list-available-cars.service';
import { Reserve } from '../../reserve.model';
import { Car } from 'src/modules/cars/car.model';
@Injectable()
export class UpdateByIdService {

    async updateReserveById(reserveId: number, startDate: string, endDate: string): Promise<Reserve> {

        const listAvailableCars = new ListAvailableCarsService();
        const availableCars = await listAvailableCars.listAvailableCars(startDate, endDate, reserveId);

        const oldReserve = await Reserve.findOne({ where: { id: reserveId } });
        if(!oldReserve) throw new HttpException("Reserve doen't exists", 404);

        const oldCar = await Car.findOne({ where: { id: oldReserve.carId } });

        const OldCarIsAvailable = availableCars.find((car: Car) => car.id === oldCar.id);
        if (!OldCarIsAvailable) {
            throw new HttpException("Your car is not available in this period!", 451);
        }

        oldReserve.set({
            startDate,
            endDate
        })
        const updatedReserve = await oldReserve.save();

        return updatedReserve;



    }
}
