import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class UpsertEmployeeDTO{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    cpf: number;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()       
    phone: number;

    @IsNumber()
    salaryy: number;
}