import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CatchesService } from './catches.service.js';
import type { Catch } from './interfaces/catch.interface.js';
import type { CreateCatchDto } from './dto/create-catch.dto.js';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe.js';
import { createCatchSchema } from './dto/create-catch.dto.js';

@Controller('catches')
export class CatchesController {
  constructor(private readonly catchesService: CatchesService) {}

  @Get()
  async getCatches(): Promise<Catch[]> {
    return this.catchesService.getCatches();
  }

  @Get(':id')
  async getCatch(@Param('id') id: number): Promise<Catch> {
    return this.catchesService.getCatch(id);
  }
  
  @Post()
  async createCatch(@Body(new ZodValidationPipe(createCatchSchema)) createCatchDto: CreateCatchDto): Promise<Catch> {
    return this.catchesService.createCatch(createCatchDto);
  }
}
