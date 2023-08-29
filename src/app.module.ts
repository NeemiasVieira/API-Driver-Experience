import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthMiddleware } from './middlewares/auth';
import { DatabaseModule } from './database/database.module';
import { CarsModule } from './modules/cars/cars.module';
import { ClientsModule } from './modules/clients/clients.module';
import { AdminsModule } from './modules/admins/admins.module';
import { ReservesModule } from './modules/reserves/reserves.module';


@Module({
  imports: [DatabaseModule, CarsModule, ClientsModule, AdminsModule, CarsModule, ReservesModule,
    //Here are the JWT configurations
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7h', algorithm: 'HS256' }
    })],
  controllers: [AppController],
  providers: [],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {

    //Here are the Routes protected by JWT

    consumer
      .apply(AuthMiddleware)
      .forRoutes('/listAvailableCars', '/create-reserve', '/reserves', '/reserves/delete/:id'); 
  }
}
