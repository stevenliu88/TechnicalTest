import mockData from './MOCK_DATA.json';
import { Injectable } from '@angular/core';
import { customer } from '../../models/customer';
import { stat } from 'fs';

@Injectable({ providedIn: 'root' })
export class CustomerService {
    private newCustomer: customer;
    private readonly data = Array.from(mockData).filter(x => x.status).map(x =>({
        id: x.id,
        firstName: `${x.first_name}`,
        lastName: `${x.last_name}`,
        email: `${x.email}`,
        gender: `${x.gender}`
    } as customer));

    private get lastId() {
        return this.data[this.data.length - 1].id;
    }

    public getMockData(): Array<any> {
        return this.data;
    }

    public addCustomer(customer: customer) {
        this.newCustomer =  {
            id: this.lastId + 1,
            firstName: customer.firstName,
            lastName: customer.lastName,
            gender: customer.gender,
            email: customer.email,
            status: true
        };
        this.data.push(this.newCustomer);
    }


}