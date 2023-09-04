import { Injectable } from '@nestjs/common';
import { Car } from '../../car.model';
import { Reserve } from 'src/modules/reserves/reserve.model';

@Injectable()
export class ListAvailableCarsService {

  //Receives an optional parameter to assist the reservation update route, ensuring that its own reservation is not considered
  async listAvailableCars(initialDate: string, finalDate: string, myReserveId: number = -1): Promise<Object[]> {

    const initialDate1: Date = new Date(initialDate);
    const finalDate1: Date = new Date(finalDate);    

    const carsAvailable: Car[] = [];
    const cars = await Car.findAll({ include: Reserve });

    //Load the reserves of cars
    for (const car of cars) {
      await car.reload({ include: Reserve });
    }

    //For each car check if it is available in the period desired by the customer 
    cars.forEach((car) => {
      let isAvailable = true;

      for (let i = 0; i < car.reserves.length; i++) {

        const startDate = new Date(car.reserves[i].startDate);
        const endDate = new Date(car.reserves[i].endDate);

        //Using the optional variable to assist the reservation update route
        if (car.reserves[i].id != myReserveId) {

          if (
            (initialDate1 <= endDate && finalDate1 >= startDate) ||
            (initialDate1 >= startDate && initialDate1 <= endDate) ||
            (finalDate1 >= startDate && finalDate1 <= endDate)
          ) {
            isAvailable = false;
            break;
          }
        }
      }

      if (isAvailable) {
        carsAvailable.push(car);
      }
    });

    return carsAvailable

  }
}
