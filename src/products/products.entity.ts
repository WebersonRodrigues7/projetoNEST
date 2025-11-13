import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class Product{
    
    @PrimaryGeneratedColumn() // gera um id e funciona igual o auto_increment
    id: number;

    @Column()
    name: string;

    @Column('decimal', {precision: 10, scale:2})
    price: number;
}