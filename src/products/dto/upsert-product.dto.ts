import { IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";
import { Url } from "url";

export class UpsertProductDTO {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    description: string

    @IsNotEmpty()
    @IsUrl()
    image_url: string
    
    @IsNotEmpty()
    @IsNumber()
    stock:number;
     
    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    price: number;
}