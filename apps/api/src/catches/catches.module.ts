import { Module } from '@nestjs/common';
import { CatchesController } from './catches.controller.js';
import { CatchesService } from './catches.service.js';
import { DatabaseModule } from '../database/database.module.js';

@Module({
  imports: [DatabaseModule],
  controllers: [CatchesController],
  providers: [CatchesService]
})
export class CatchesModule {}
