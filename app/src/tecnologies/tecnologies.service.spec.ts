import { Test, TestingModule } from '@nestjs/testing';
import { TecnologiesService } from './tecnologies.service';

describe('TecnologiesService', () => {
  let service: TecnologiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TecnologiesService],
    }).compile();

    service = module.get<TecnologiesService>(TecnologiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
