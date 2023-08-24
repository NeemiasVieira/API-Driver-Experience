import { Injectable } from '@nestjs/common';
import { Car, CarType } from '../../car.model';

@Injectable()
export class CreateCarService {
    async createCar(car : CarType) : Promise<string>{
        await Car.create({...car});
        return "Car is created =)"
    }
}
