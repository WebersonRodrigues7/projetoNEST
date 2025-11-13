import { Injectable, NotFoundException } from '@nestjs/common';
import { UpsertProductDTO } from './dto/upsert-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    private products: Array<any>;
    
    constructor(@InjectRepository(Product) // Repositorio aqui é uma abstração das queries,uma pessoa interage com o banco(serve pra fazer as query)
    private productsRepository: Repository<Product>

    )
    {
        this.products = [
        {
            "id": 1,
            "name": "Biscoito"
        },
        {
            "id": 2,
            "name": "Morango"
        }
        ]

    }

    findAll() {
        return this.productsRepository.find(); // usando o banco para pegar as info
    }

    async create(product: UpsertProductDTO) {
        const newproduct = this.productsRepository.create(product) // criando um novo produto com um metodo do repositorio
        await this.productsRepository.save(newproduct) // salvando no repositorio
        return {
            "message": "Produto Criado!"
        };
    }

    async update(id: number, product: UpsertProductDTO) {
        
        await this.productsRepository.update(id, product)
        return {
            "message": "Produto Atualizado!"
        };
    }

    delete(id: number) {
        this.products = this.products.filter((p) => p.id != id);
        return {
            "message": "Produto removido!"
        }
    }
}