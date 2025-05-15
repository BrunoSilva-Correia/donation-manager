import { HttpExceptionFilter } from '@/domain/filters';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');
  app.enableCors({ origin: '*', methods: '*' });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix('/api');

  const config = new DocumentBuilder()
    .setTitle('Donation Manager')
    .setDescription('Donation Manager API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addGlobalResponse(
      {
        status: 500,
        description: 'Internal server error',
      },
      {
        status: 400,
        description: 'Bad Request',
      },
      {
        status: 404,
        description: 'Not Found',
      },
    )
    .setContact(
      'Bruno Correia',
      'https://github.com/BrunoSilva-Correia',
      'brunocorreiasf@gmail.com',
    )
    .build();
  const documentFactory = () =>
    SwaggerModule.createDocument(app, config, {
      ignoreGlobalPrefix: true,
    });
  SwaggerModule.setup('/docs', app, documentFactory);

  await app.listen(port);
  console.log(`🚀 Server is running on http://localhost:${port}`);
}
bootstrap();
