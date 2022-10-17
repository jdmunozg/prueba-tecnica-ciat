import { Test, TestingModule } from '@nestjs/testing';
import { PalmeraService } from './palmera.service';

describe('PalmeraService', () => {
  let service: PalmeraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PalmeraService],
    }).compile();

    service = module.get<PalmeraService>(PalmeraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
