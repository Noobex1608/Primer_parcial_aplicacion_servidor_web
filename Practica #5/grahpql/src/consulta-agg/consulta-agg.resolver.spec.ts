import { Test, TestingModule } from '@nestjs/testing';
import { ConsultaAggResolver } from './consulta-agg.resolver';
import { ConsultaAggService } from './consulta-agg.service';

describe('ConsultaAggResolver', () => {
  let resolver: ConsultaAggResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultaAggResolver, ConsultaAggService],
    }).compile();

    resolver = module.get<ConsultaAggResolver>(ConsultaAggResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
