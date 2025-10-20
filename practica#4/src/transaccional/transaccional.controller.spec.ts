import { Test, TestingModule } from '@nestjs/testing';
import { TransaccionalController } from './transaccional.controller';
import { TransaccionalService } from './transaccional.service';

describe('TransaccionalController', () => {
  let controller: TransaccionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransaccionalController],
      providers: [TransaccionalService],
    }).compile();

    controller = module.get<TransaccionalController>(TransaccionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
