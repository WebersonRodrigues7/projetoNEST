import { IsEmail, IsNotEmpty } from "class-validator";

export class UpsertDTO {
    @IsNotEmpty()
    name: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;

}