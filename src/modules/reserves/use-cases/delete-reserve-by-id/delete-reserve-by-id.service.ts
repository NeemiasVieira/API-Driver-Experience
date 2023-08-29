import { Injectable, HttpException } from '@nestjs/common';
import { Reserve } from '../../reserve.model';

@Injectable()
export class DeleteReserveByIdService {
    async deleteReserveById(id: number){
        const reserveExists = await Reserve.findOne({where: {id}});

        if(!reserveExists) throw new HttpException("Reserve not found", 404);

        await Reserve.destroy({where: {id}});
    }

    
}
