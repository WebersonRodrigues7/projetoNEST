import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Vendas } from "./vendas.entity";
import { Product } from "src/products/products.entity";

@Entity()
export class SalesProducts{
    @PrimaryGeneratedColumn()
    id: number;
    
    @OneToMany(() => Vendas, (vendas) =>vendas.salesProducts)
    vendas: Vendas

    @OneToMany(() => Product,(produtos) => produtos.salesProducts)
    produtos: Product

}