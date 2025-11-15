import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "../employee/employee.entity";
import { Customer } from "src/customers/customers.entity";

@Entity()
export class Vendas {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    notafiscal: string;

    @ManyToOne(() => Employee, (employee) => employee.vendas)
    employee: Employee

    @ManyToOne(() => Customer, (customer) => customer.vendas)
    customer: Customer

    // @OneToMany(() => )
}