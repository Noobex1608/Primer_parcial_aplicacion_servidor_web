import { Test, TestingModule } from '@nestjs/testing';
import { TransaccionalService } from './transaccional.service';

describe('TransaccionalService', () => {
  let service: TransaccionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransaccionalService],
    }).compile();

    service = module.get<TransaccionalService>(TransaccionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
