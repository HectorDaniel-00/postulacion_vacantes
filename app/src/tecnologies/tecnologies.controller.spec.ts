import { Test, TestingModule } from '@nestjs/testing';
import { TecnologiesController } from './tecnologies.controller';
import { TecnologiesService } from './tecnologies.service';

describe('TecnologiesController', () => {
  let controller: TecnologiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TecnologiesController],
      providers: [TecnologiesService],
    }).compile();

    controller = module.get<TecnologiesController>(TecnologiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
