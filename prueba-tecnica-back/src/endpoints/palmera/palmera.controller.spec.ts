import { Test, TestingModule } from '@nestjs/testing';
import { PalmeraController } from './palmera.controller';
import { PalmeraService } from './palmera.service';

describe('PalmeraController', () => {
  let controller: PalmeraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PalmeraController],
      providers: [PalmeraService],
    }).compile();

    controller = module.get<PalmeraController>(PalmeraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
