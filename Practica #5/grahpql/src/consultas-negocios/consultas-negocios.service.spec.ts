import { Test, TestingModule } from '@nestjs/testing';
import { ConsultasNegociosService } from './consultas-negocios.service';

describe('ConsultasNegociosService', () => {
  let service: ConsultasNegociosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultasNegociosService],
    }).compile();

    service = module.get<ConsultasNegociosService>(ConsultasNegociosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
