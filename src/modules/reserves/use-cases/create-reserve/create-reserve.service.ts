import { HttpException, Injectable } from '@nestjs/common';
import { Reserve, ReserveType } from '../../reserve.model';
import { Client } from 'src/modules/clients/client.model';
import { Car } from 'src/modules/cars/car.model';

@Injectable()
export class CreateReserveService {
    async createReserve(reserve: Reserve) : Promise<Reserve>{
        const client = await Client.findOne({where: {id: reserve.clientId}});
        const car = await Car.findOne({where: {id: reserve.carId}});
        if (!client || !car) {
            throw new HttpException('Client or car not found', 404);
          }

        const newReserve = await Reserve.create({...reserve});
        await client.$add('reserves', newReserve);
        await car.$add('reserves', newReserve);
        
        return newReserve;
    }
}
