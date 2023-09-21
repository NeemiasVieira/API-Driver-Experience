import { Injectable, HttpException } from '@nestjs/common';
import { ListAvailableCarsService } from 'src/modules/cars/use-cases/list-available-cars/list-available-cars.service';
import { Reserve } from '../../reserve.model';
import { Car } from 'src/modules/cars/car.model';

const countDays = (startDate: string, endDate: string) => {

  const date1 = new Date(startDate);
  const date2 = new Date(endDate);
  const diferencaEmMilissegundos = Math.abs(date2.getTime() - date1.getTime());
  const diferencaEmDias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

  return diferencaEmDias;
  }
  
  
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
            throw new HttpException("Your car is not available in this period!", 409);
        }

        oldReserve.set({
            startDate,
            endDate,
            totalDays: countDays(startDate, endDate),
            totalCost: (countDays(startDate, endDate) * oldCar.dailyRate)
        })
        const updatedReserve = await oldReserve.save();

        return updatedReserve;



    }
}
