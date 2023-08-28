import { Injectable } from '@nestjs/common';
import { Car } from '../../car.model';
import { CreateCarDto } from './create-car-dto';

@Injectable()
export class CreateCarService {
    async createCar(car : CreateCarDto) : Promise<string>{
        await Car.create({...car});
        return "Car is created =)"
    }
}
