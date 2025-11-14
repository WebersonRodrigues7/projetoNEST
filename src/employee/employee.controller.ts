import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { UpsertEmployeeDTO } from './dto/upsert-employeedto';

@Controller('employee')
export class EmployeeController {
    constructor (private readonly employeeService: EmployeeService) {}

    @Get()
    findAll(){
        return this.employeeService.findAll()
    }

    @Post()
    create(@Body() employeeBody: UpsertEmployeeDTO){
        return this.employeeService.create(employeeBody)
    }

    @Put(':id')
    update(@Param('id') employeeid: number, @Body() updateEmployee: UpsertEmployeeDTO){
        return this.employeeService.update(employeeid,updateEmployee)
    }

    @Delete(':id')
    delete(@Param('id') employeeID: number){
        return this.employeeService.delete(employeeID)
    }


}
