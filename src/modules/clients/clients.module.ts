import { Module } from '@nestjs/common';
import { LoginController } from './use-cases/login/login.controller';
import { LoginService } from './use-cases/login/login.service';
import { CreateClientController } from './use-cases/create-client/create-client.controller';
import { CreateClientService } from './use-cases/create-client/create-client.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '7h', algorithm: 'HS256' }
  })],
  controllers: [LoginController, CreateClientController],
  providers: [LoginService, CreateClientService]
})

export class ClientsModule {}
