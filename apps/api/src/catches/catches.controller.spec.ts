import { Test, TestingModule } from '@nestjs/testing';
import { CatchesController } from './catches.controller.js';

describe('CatchesController', () => {
  let controller: CatchesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatchesController],
    }).compile();

    controller = module.get<CatchesController>(CatchesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
