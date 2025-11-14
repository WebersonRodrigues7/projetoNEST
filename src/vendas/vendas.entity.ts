import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "../employee/employee.entity";

@Entity()
export class Vendas {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    notafiscal: string;

    @OneToMany(() => Employee, (employee) => employee.id)
    @JoinColumn({name: 'EmployeeID'})
    employee: Employee

    
}