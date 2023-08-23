import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CarsModule } from './modules/cars/cars.module';
import { ClientsModule } from './modules/clients/clients.module';
import { AdminsModule } from './modules/admins/admins.module';
import { ReservesModule } from './modules/reserves/reserves.module';


@Module({
  imports: [DatabaseModule, CarsModule, ClientsModule, AdminsModule, CarsModule, ReservesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
