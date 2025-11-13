import { Body, Controller, Get, Post, Put, Param } from "@nestjs/common";
import { CustomersService } from "./customers.service";
import { UpsertDTO } from "./dto/upsert.dto"
// @ -> é um decorator
// Eles são uma 
// função (ou método) que modificam 
// o comportamento de outra função passada, 
// retornando uma nova função.
@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}
    
    @Get()
    async showAll() {
        let customers = await this.customersService.get()
        return {
            'customers': customers
        }
    }

    @Post()
    create(@Body() bodyCustomer: UpsertDTO) {
        return this.customersService.create(bodyCustomer);
    }

    @Put('id')
    update(@Param('id') customerID: number, @Body() customerBody: UpsertDTO){
        return this.customersService.update(customerID, customerBody)
    }
}