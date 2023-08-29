import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

//Load all environment variables from .env
import * as dotenv from 'dotenv';
dotenv.config();

//Starts the server
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: false, //Allows customization of messages in class-validator
    whitelist: true, //Do not leave fields that are not required to be sent
    forbidNonWhitelisted: true    
  }))
  await app.listen(3333);
}
bootstrap();
