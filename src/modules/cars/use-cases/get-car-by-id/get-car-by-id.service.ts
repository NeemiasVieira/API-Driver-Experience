import { Injectable } from '@nestjs/common';
import { Car } from '../../car.model';
import { HttpException } from '@nestjs/common';

@Injectable()
export class GetCarByIdService {

    async getCarById(id: number) : Promise<Car>{

        const car = await Car.findOne({where: {id}});
        
        if(!car){
            throw new HttpException("Car not found", 404);
        }
        return car;
    }

}
