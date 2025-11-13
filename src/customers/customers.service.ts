import { Injectable } from "@nestjs/common";
import { UpsertDTO } from "./dto/upsert.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "./customers.entity";
import { Repository } from "typeorm";

@Injectable()
export class CustomersService {
   private customers: Array<any>;
   
   constructor(@InjectRepository(Customer)
      private customerRepository: Repository<Customer>  
   ) 
   {
     this.customers = [
        {
            "id": 1,
            "nome": "Félix",
            "email": "felix@gmail.com",
            "idade": 18
        }
     ]
   }

   async get() {
      return await this.customerRepository.find();
   }

   async create(customer: UpsertDTO) {
   
     const newcostumer = this.customerRepository.create(customer)
     await this.customerRepository.save(newcostumer)

     return {
        "message": "Salvo com sucesso"
     };
   }
   async update(id: number, customer: UpsertDTO) {
           await this.customerRepository.update(id, customer)
           return {
               "message": "Cliente Atualizado!"
           };
       } 

   async delete(id:number){
      await this.customerRepository.delete(id)
      return {
         "message": "Cliente deletado"
      };
   }
}