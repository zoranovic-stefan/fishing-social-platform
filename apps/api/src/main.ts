import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import type { Env } from './config/env.schema.js';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService<Env, true>);

  app.enableCors({
    origin: config.get('FRONTEND_URL', { infer: true }),
  });

  app.setGlobalPrefix('api');

  await app.listen(
    config.get('PORT', { infer: true }),
  );
}
await bootstrap();
