import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { VendasService } from './vendas.service';
import { Vendas } from './vendas.entity';

@Controller('vendas')
export class VendasController {
    constructor(private readonly vendasService: VendasService){}

    @Get()
    findAll(){
        return this.vendasService.findAll();
    }

    @Post()
    create(@Body() vendasBody: Vendas){
        return this.vendasService.create(vendasBody)
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.vendasService.delete(id)
    }
    
}
