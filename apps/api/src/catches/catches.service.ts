import { Injectable } from '@nestjs/common';

@Injectable()
export class CatchesService {
  getCatches(): { id: number; species: string; lengthCm: number; weightKg: number }[] {
    return [
      { id: 1, species: 'Northern Pike', lengthCm: 82, weightKg: 4.2 },
      { id: 2, species: 'Smallmouth Bass', lengthCm: 43, weightKg: 1.8 },
      { id: 3, species: 'Walleye', lengthCm: 56, weightKg: 2.5 },
    ];
  }

  getCatch(id: string): { id: number; species: string; lengthCm: number; weightKg: number } {
    return { id: parseInt(id), species: 'Northern Pike', lengthCm: 82, weightKg: 4.2 };
  }
}
