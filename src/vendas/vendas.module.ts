import { Module } from '@nestjs/common';
import { VendasService } from './vendas.service';
import { VendasController } from './vendas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendas } from './vendas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vendas])],
  providers: [VendasService],
  controllers: [VendasController]
})
export class VendasModule {}
