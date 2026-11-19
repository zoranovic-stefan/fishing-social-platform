import { Module } from '@nestjs/common';
import { CatchesController } from './catches.controller.js';
import { CatchesService } from './catches.service.js';

@Module({
  controllers: [CatchesController],
  providers: [CatchesService]
})
export class CatchesModule {}
