import { Module } from '@nestjs/common';
import { CreateReserveController } from './use-cases/create-reserve/create-reserve.controller';
import { CreateReserveService } from './use-cases/create-reserve/create-reserve.service';

@Module({
  controllers: [CreateReserveController],
  providers: [CreateReserveService]
})
export class ReservesModule {}
