import { Test, TestingModule } from '@nestjs/testing';
import { SalesProductsController } from './sales-products.controller';

describe('SalesProductsController', () => {
  let controller: SalesProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesProductsController],
    }).compile();

    controller = module.get<SalesProductsController>(SalesProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
