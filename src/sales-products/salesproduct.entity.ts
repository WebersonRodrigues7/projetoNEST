import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SalesProducts{
    @PrimaryGeneratedColumn()
    id: number;

    
}