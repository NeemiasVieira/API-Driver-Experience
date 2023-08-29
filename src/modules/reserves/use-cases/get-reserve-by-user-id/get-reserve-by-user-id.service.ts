import { Injectable, HttpException } from '@nestjs/common';
import { Reserve } from '../../reserve.model';

@Injectable()
export class GetReserveByUserIdService {
    async getReserveByUserId(id: number){
        const reserves = await Reserve.findAll({where: {clientId: id}});
        if(!reserves){
            throw new HttpException("Reserves not found", 404);
        }
        return reserves;
    }
}
