import { Injectable, NotFoundException } from '@nestjs/common';
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

    async create(venda:Vendas){
        const newvenda = this.vendasRepository.create(venda)
        await this.vendasRepository.save(newvenda)

        return {
            message: "Venda criada"
        }
    }

    async update(id: number, venda:Vendas){
        const vendasfound = await this.vendasRepository.findOne({where: {id}});
        if(!vendasfound){
            throw new NotFoundException("Venda não encontrada")
        }
        await this.vendasRepository.update(id, venda)

        return {
            message: "Venda atualizada"
        }
    }

    async delete(id:number){
        const vendasfound = await this.vendasRepository.findOne({where: {id}})
        if(!vendasfound){
            throw new NotFoundException("Venda não encontrada")
        }

        await this.vendasRepository.delete(vendasfound)

        return {
            message: "Venda cancelada/excluída"
        }
    }
}
