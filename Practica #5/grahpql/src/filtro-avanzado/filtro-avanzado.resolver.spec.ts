import { Test, TestingModule } from '@nestjs/testing';
import { FiltroAvanzadoResolver } from './filtro-avanzado.resolver';
import { FiltroAvanzadoService } from './filtro-avanzado.service';

describe('FiltroAvanzadoResolver', () => {
  let resolver: FiltroAvanzadoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiltroAvanzadoResolver, FiltroAvanzadoService],
    }).compile();

    resolver = module.get<FiltroAvanzadoResolver>(FiltroAvanzadoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
