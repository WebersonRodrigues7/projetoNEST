import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "../employee/employee.entity";
import { Customer } from "src/customers/customers.entity";
import { SalesProducts } from "src/vendas/salesproduct.entity";

@Entity()
export class Vendas {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Employee, (employee) => employee.vendas)
    employee: Employee

    @ManyToOne(() => Customer, (customer) => customer.vendas)
    customer: Customer

    @ManyToOne(() => SalesProducts, (salesProducts) => salesProducts.vendas)
    salesProducts: SalesProducts[]

    @Column()
    notafiscal: string;
}