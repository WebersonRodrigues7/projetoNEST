import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

}