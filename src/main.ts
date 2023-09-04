import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const driveXperienceAPIDescription = `

The DriveXperience API is a robust software solution designed for managing vehicle rental and reservation systems. It provides developers with a set of powerful tools and features to streamline the management of rental vehicles and reservations.

Key Features:

- User Management: Efficiently handle user accounts, authentication, and authorization.
- Vehicle Catalog: Access a comprehensive catalog of vehicles with detailed specifications and images.
- Reservation System: Implement a reservation system that allows users to book vehicles for specific dates and times.
- Documentation: Detailed API documentation for seamless integration into applications.

The DriveXperience API simplifies the complexities of vehicle rental operations, making it an invaluable tool for businesses and individuals seeking reliable and efficient vehicle rental services.
`;



//Load all environment variables from .env
import * as dotenv from 'dotenv';
dotenv.config();

//Starts the server
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); 
  
  const config = new DocumentBuilder()
    .setTitle('DriveXperience - API')
    .setDescription(driveXperienceAPIDescription)
    .setVersion('1.0')
    .addTag('Cars')
    .addTag('Clients')
    .addTag('Reserves')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document, {
    customSiteTitle: 'DriveExperience - API Documentation',
    customfavIcon: 'https://avatars.githubusercontent.com/u/6936373?s=200&v=4',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
    ],
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css',
    ],
  });

  
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: false, //Allows customization of messages in class-validator
    whitelist: true, //Do not leave fields that are not required to be sent
    forbidNonWhitelisted: true    
  }))
  await app.listen(3333);
}
bootstrap();
