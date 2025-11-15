import { Vendas } from "src/vendas/vendas.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    cpf:number

    @Column()
    email: string;

    @Column()
    phone: number;

    @Column()
    salary: string;

    @OneToMany(() => Vendas, (vendas) => vendas.employee)
    vendas: Vendas[]

}