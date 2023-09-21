import { Injectable, HttpException } from '@nestjs/common';
import { Reserve } from '../../reserve.model';

export const isDateInMinimumAntecedence = (targetDate: string): boolean => {
    const today = new Date(); 
    const targetDateObj = new Date(targetDate); 
    const timeDifference = targetDateObj.getTime() - today.getTime();
    const twoDaysInMilliseconds = 2 * 24 * 60 * 60 * 1000;
    return timeDifference >= twoDaysInMilliseconds;
}
@Injectable()
export class DeleteReserveByIdService {
    async deleteReserveById(id: number){
        const reserveExists = await Reserve.findOne({where: {id}});
        if(!reserveExists) throw new HttpException("Reserve not found", 404);
        // if(!isDateInMinimumAntecedence(reserveExists.startDate)) throw new HttpException("Reserve must be cancelled with 2 days before the start date", 400);
        await Reserve.destroy({where: {id}});
    }

    
}
