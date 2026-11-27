import { Inject,Injectable } from '@nestjs/common';

import { DATABASE } from '../database/database.provider.js';
import type { Database } from '../database/database.provider.js';
import type { Catch } from './interfaces/catch.interface.js';
import { catches } from '../database/schema/catches.schema.js';
import { eq } from 'drizzle-orm';
import { NotFoundException } from '@nestjs/common';
import type { CreateCatchDto } from './dto/create-catch.dto.js';
import type { NewCatchRecord } from '../database/schema/catches.schema.js';

@Injectable()
export class CatchesService {
  constructor(
    @Inject(DATABASE) private readonly db: Database,
  ) {}

  async getCatches(): Promise<Catch[]> {
    const results = await this.db.select().from(catches);

    if (!results) {
      throw new NotFoundException('No catches found');
    }
    return results.map((result) => ({
      id: result.id,
      species: result.species,
      lengthCm: Number(result.lengthCm),
      weightKg: Number(result.weightKg),
    }));
  }

  async getCatch(id: number): Promise<Catch> {
    const [result] = await this.db.select().from(catches).where(eq(catches.id, id)).limit(1);

    if (!result) {
      throw new NotFoundException(`Catch with ID ${id} was not found`);
    }
    return {
      id: result.id,
      species: result.species,
      lengthCm: Number(result.lengthCm),
      weightKg: Number(result.weightKg),
    };
  }

  async createCatch(createCatchDto: CreateCatchDto): Promise<Catch> {
    const newCatch: NewCatchRecord = {
      species: createCatchDto.species,
      lengthCm: createCatchDto.lengthCm.toFixed(2),
      weightKg: createCatchDto.weightKg.toFixed(3),
      caughtAt: new Date(createCatchDto.caughtAt),
    };

    const [result] = await this.db.insert(catches).values(newCatch).$returningId();

    return this.getCatch(result.id);
  }


}
