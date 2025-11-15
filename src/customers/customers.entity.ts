import { Vendas } from "src/vendas/vendas.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cpf: number;

    @Column()
    email: string

    @Column()
    phone:number

    @OneToMany(() => Vendas, (vendas) => vendas.customer)
    vendas: Vendas[]

}