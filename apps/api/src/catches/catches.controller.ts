import { Controller, Get, Param } from '@nestjs/common';
import { CatchesService } from './catches.service.js';

@Controller('catches')
export class CatchesController {
  constructor(private readonly catchesService: CatchesService) {}

  @Get()
  getCatches() {
    return this.catchesService.getCatches();
  }

  @Get(':id')
  getCatch(@Param('id') id: string) {
    return this.catchesService.getCatch(id);
  }
}
