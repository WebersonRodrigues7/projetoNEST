import { Employee } from './src/employee/employee.entity';
import { Customer } from './src/customers/customers.entity';
import { Product } from './src/products/products.entity';
import { DataSource } from 'typeorm';


export default new DataSource({ // criando as imigrações
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'curso',
  entities: [Product, Customer, Employee],
  migrations: ['dist/migrations/*.js'],
});
