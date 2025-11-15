import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber } from "class-validator";

export class UpsertDTO {
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    @IsNumber()
    cpf: number;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsPhoneNumber()
    phone: number;

}