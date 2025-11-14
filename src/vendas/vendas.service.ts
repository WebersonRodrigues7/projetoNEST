import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vendas } from './vendas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VendasService {
    constructor(@InjectRepository(Vendas)
    private vendasRepository: Repository<Vendas>
    ) {}

    findAll(){
        return this.vendasRepository.find();
    }
}
