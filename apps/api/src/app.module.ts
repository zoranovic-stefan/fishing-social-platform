import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { CatchesModule } from './catches/catches.module.js';
import { envSchema } from './config/env.schema.js';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validate: (config) => envSchema.parse(config),
  }), UsersModule, CatchesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
