import { Module } from '@nestjs/common';
import { CreateCarController } from './use-cases/create-car/create-car.controller';
import { CreateCarService } from './use-cases/create-car/create-car.service';
import { ListAvailableCarsController } from './use-cases/list-available-cars/list-available-cars.controller';
import { ListAvailableCarsService } from './use-cases/list-available-cars/list-available-cars.service';
import { GetCarByIdController } from './use-cases/get-car-by-id/get-car-by-id.controller';
import { GetCarByIdService } from './use-cases/get-car-by-id/get-car-by-id.service';


@Module({
  controllers: [CreateCarController, ListAvailableCarsController, GetCarByIdController],
  providers: [CreateCarService, ListAvailableCarsService, GetCarByIdService]
})
export class CarsModule {}
