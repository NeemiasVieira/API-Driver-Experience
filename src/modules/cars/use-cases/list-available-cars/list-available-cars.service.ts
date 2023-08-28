import { Injectable } from '@nestjs/common';
import { Car } from '../../car.model';
import { Reserve } from 'src/modules/reserves/reserve.model';

@Injectable()
export class ListAvailableCarsService {
  async listAvailableCars(initialDate: string, finalDate: string): Promise<Object[]> {
    const initialDate1 = new Date(initialDate);
    const finalDate1 = new Date(finalDate);

    const carsAvailable: Car[] = [];
    const cars = await Car.findAll({ include: Reserve });

    for (const car of cars) {
    await car.reload({ include: Reserve });
    }

    console.log(cars[0].reserves);

    cars.forEach((car) => {
      let isAvailable = true;

      for (let i = 0; i < car.reserves.length; i++) {
        const startDate = new Date(car.reserves[i].startDate);
        const endDate = new Date(car.reserves[i].endDate);
        
        if (
          (initialDate1 <= endDate && finalDate1 >= startDate) ||
          (initialDate1 >= startDate && initialDate1 <= endDate) ||
          (finalDate1 >= startDate && finalDate1 <= endDate)
        ) {
          isAvailable = false;
          break;
        }
      }

      if (isAvailable) {
        carsAvailable.push(car);
      }
    });
    return carsAvailable

    // const ids: number[] = []
    // carsAvailable.forEach((car) => ids.push(car.id));
    // const carsAvailableWithoutReserves = await Car.findAll({where: {id: ids}});
    // return carsAvailableWithoutReserves;

  }
}
