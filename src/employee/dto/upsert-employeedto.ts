import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class UpsertEmployeeDTO{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string
}