import { Module } from '@nestjs/common';
import { CreateCarController } from './use-cases/create-car/create-car.controller';
import { CreateCarService } from './use-cases/create-car/create-car.service';

@Module({
  controllers: [CreateCarController],
  providers: [CreateCarService]
})
export class CarsModule {}
