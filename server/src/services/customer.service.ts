import { Injectable } from '@nestjs/common';

import { Customer } from '../models/customer';
import * as mockData from './MOCK_DATA.json';

@Injectable()
export class CustomerService {
  private readonly data = Array.from(mockData).filter(x => x.status).map(x => ({
    id: x.id,
    firstName: x.first_name,
    lastName: x.last_name,
    email: x.email,
    gender: x.gender,
  } as Customer));

  private get lastId() {
    return this.data[this.data.length - 1].id;
  }

  public list(skip: number, take: number): Array<Customer> {
    return this.data.slice(skip, skip + take);
  }

  public listAll(): Array<Customer> {
    return this.data;
  }

  public addCustomer(customer: Customer) {
    const newCustomer = { ...customer, id: this.lastId + 1, status: true };
    this.data.push(newCustomer);
    return newCustomer;
  }
}