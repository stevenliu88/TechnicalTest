import { Controller, Get, Post, Body } from '@nestjs/common';

import { CustomerService } from './services/customer.service';
import { Customer } from './models/customer';

@Controller('api/customer')
export class AppController {
  constructor(private readonly customerService: CustomerService) { }

  @Get()
  findAll(): Array<Customer> {
    return this.customerService.listAll();
  }

  @Post()
  create(@Body() customer: Customer): Customer {
    return this.customerService.addCustomer(customer);
  }
}
