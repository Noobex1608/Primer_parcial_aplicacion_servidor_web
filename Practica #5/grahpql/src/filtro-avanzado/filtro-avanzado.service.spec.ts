import { Test, TestingModule } from '@nestjs/testing';
import { FiltroAvanzadoService } from './filtro-avanzado.service';

describe('FiltroAvanzadoService', () => {
  let service: FiltroAvanzadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiltroAvanzadoService],
    }).compile();

    service = module.get<FiltroAvanzadoService>(FiltroAvanzadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
