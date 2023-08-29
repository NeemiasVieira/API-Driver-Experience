import { Injectable } from '@nestjs/common';
import { Car } from '../../car.model';
import { CreateCarDto } from './create-car-dto';

@Injectable()
export class CreateCarService {

    async createCar(car: CreateCarDto): Promise<Car> {
        const createdCar = await Car.create({ ...car });
        return createdCar;
    }
}
