import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';
import * as cookieParser from 'cookie-parser';
// import { ValidationPipe } from './validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule, {logger: ['error', 'warn']},
  );

  // app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  hbs.registerPartials(__dirname + 'views/layouts');
  app.set('view options', { layout: 'layouts/layout' });
  app.setViewEngine('hbs');

  await app.listen(3000);
}

bootstrap();
