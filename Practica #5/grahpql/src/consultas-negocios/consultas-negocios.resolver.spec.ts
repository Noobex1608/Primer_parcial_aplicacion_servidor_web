import { Test, TestingModule } from '@nestjs/testing';
import { ConsultasNegociosResolver } from './consultas-negocios.resolver';
import { ConsultasNegociosService } from './consultas-negocios.service';

describe('ConsultasNegociosResolver', () => {
  let resolver: ConsultasNegociosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultasNegociosResolver, ConsultasNegociosService],
    }).compile();

    resolver = module.get<ConsultasNegociosResolver>(ConsultasNegociosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
