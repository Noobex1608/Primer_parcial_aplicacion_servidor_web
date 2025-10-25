import { Test, TestingModule } from '@nestjs/testing';
import { ConsultaAggService } from './consulta-agg.service';

describe('ConsultaAggService', () => {
  let service: ConsultaAggService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultaAggService],
    }).compile();

    service = module.get<ConsultaAggService>(ConsultaAggService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
