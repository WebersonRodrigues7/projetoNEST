import { Module } from '@nestjs/common';
import { SalesProductsService } from './sales-products.service';
import { SalesProductsController } from './sales-products.controller';

@Module({
  providers: [SalesProductsService],
  controllers: [SalesProductsController]
})
export class SalesProductsModule {}
