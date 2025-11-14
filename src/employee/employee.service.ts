import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository } from 'typeorm';
import { UpsertEmployeeDTO } from './dto/upsert-employeedto';

@Injectable()
export class EmployeeService {

        constructor(@InjectRepository(Employee)
        private employeeRepository: Repository<Employee>
        )
        {}

        findAll(){
            return this.employeeRepository.find();
        }

        async create(employee: UpsertEmployeeDTO){
            const newemployee = await this.employeeRepository.create(employee);
            await this.employeeRepository.save(newemployee);
            return {
                "message": "Funcionário Criado"
            }
        }
        
        async update(id:number, employee: UpsertEmployeeDTO){
            const employeefound = await this.employeeRepository.findOne({where: {id}});
            if(!employeefound){
                throw new NotFoundException("Funcionário não encontrado")
            }

            await this.employeeRepository.update(id, employee)

            return {
                message: "Funcionário Atualizado"
            }
        }

        async delete(id: number){
            const employeefound = await this.employeeRepository.findOne({where: {id}});
            if(!employeefound){
                throw new NotFoundException("Funcionário não encontrado")
            }
            await this.employeeRepository.delete(id)
            return {
                message: "Funcionário Deletado"
            }
        }
}
