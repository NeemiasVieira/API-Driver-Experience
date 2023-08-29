import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CarsModule } from './modules/cars/cars.module';
import { ClientsModule } from './modules/clients/clients.module';
import { AdminsModule } from './modules/admins/admins.module';
import { ReservesModule } from './modules/reserves/reserves.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthMiddleware } from './middlewares/auth';


@Module({
  imports: [DatabaseModule, CarsModule, ClientsModule, AdminsModule, CarsModule, ReservesModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h', algorithm: 'HS256' }
    })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('/listAvailableCars', '/create-reserve'); 
  }
}
