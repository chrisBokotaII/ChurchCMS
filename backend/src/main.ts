
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply Helmet for basic security headers
  app.use(helmet());

  // Enable CORS for frontend access
  app.enableCors({
    origin: '*', // In production, restrict this to your frontend's domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  // Set a global prefix for all routes (e.g., /api/v1)
  app.setGlobalPrefix('api/v1');

  // Apply global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip properties that do not have any decorators
      forbidNonWhitelisted: true, // Throw an error if non-whitelisted values are provided
      transform: true, // Automatically transform payloads to be objects typed according to their DTO classes
    }),
  );

  // Apply global serialization to transform outgoing responses
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));


  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
