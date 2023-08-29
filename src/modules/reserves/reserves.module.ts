import { Module } from '@nestjs/common';
import { CreateReserveController } from './use-cases/create-reserve/create-reserve.controller';
import { CreateReserveService } from './use-cases/create-reserve/create-reserve.service';
import { GetReserveByUserIdController } from './use-cases/get-reserve-by-user-id/get-reserve-by-user-id.controller';
import { GetReserveByUserIdService } from './use-cases/get-reserve-by-user-id/get-reserve-by-user-id.service';
import { DeleteReserveByIdService } from './use-cases/delete-reserve-by-id/delete-reserve-by-id.service';
import { DeleteReserveByIdController } from './use-cases/delete-reserve-by-id/delete-reserve-by-id.controller';
import { UpdateByIdController } from './use-cases/update-by-id/update-by-id.controller';
import { UpdateByIdService } from './use-cases/update-by-id/update-by-id.service';

@Module({
  controllers: [CreateReserveController, GetReserveByUserIdController, DeleteReserveByIdController, UpdateByIdController],
  providers: [CreateReserveService, GetReserveByUserIdService, DeleteReserveByIdService, UpdateByIdService]
})
export class ReservesModule {}
