import { Module } from '@nestjs/common';
import { LoginController } from './use-cases/login/login.controller';
import { LoginService } from './use-cases/login/login.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService]
})
export class ClientsModule {}
