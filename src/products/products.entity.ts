import { SalesProducts } from "src/vendas/salesproduct.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class Product{
    
    @PrimaryGeneratedColumn() // gera um id e funciona igual o auto_increment
    id: number;

    @Column('string')
    name: string;

    @Column('string')
    description: string

    @Column('string')
    image_url: string;

    @Column('number')
    stock: string

    @Column('decimal', {precision: 10, scale:2})
    price: number;

    @ManyToOne(() => SalesProducts, (salesProducts) => salesProducts.produtos)
    salesProducts: SalesProducts[]
}