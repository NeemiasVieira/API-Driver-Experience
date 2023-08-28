import { Module } from '@nestjs/common';
import { LoginController } from './use-cases/login/login.controller';
import { LoginService } from './use-cases/login/login.service';
import { JwtModule } from '@nestjs/jwt';
import { CreateClientController } from './use-cases/create-client/create-client.controller';
import { CreateClientService } from './use-cases/create-client/create-client.service';

@Module({
  imports: [JwtModule.register({
    secret: 'chave-secreta', // Chave secreta para assinatura do token (altere para algo mais seguro)
    signOptions: { expiresIn: '1h' }, // Tempo de expiração do token
  }),],
  controllers: [LoginController, CreateClientController],
  providers: [LoginService, CreateClientService]
})
export class ClientsModule {}
