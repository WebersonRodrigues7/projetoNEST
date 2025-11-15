import { IsNotEmpty } from "class-validator";
import { Employee } from "src/employee/employee.entity";
import { ManyToOne } from "typeorm";

export class Vendas{
    @IsNotEmpty()
    total: string;
}