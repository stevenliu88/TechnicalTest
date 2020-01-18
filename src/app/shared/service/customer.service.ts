import mockData from './MOCK_DATA.json';
import { Injectable } from '@angular/core';
import { customer } from '../../models/customer';

@Injectable({ providedIn: 'root' })
export class CustomerService {
    private readonly data = Array.from(mockData).filter(x => x.status).map(x =>({
        id: x.id,
        firstName: `${x.first_name}`,
        lastName: `${x.last_name}`,
        email: `${x.email}`,
        gender: `${x.gender}`
    } as customer));

    public getMockData(): Array<any> {
        console.log(this.data);
        return this.data;
    }

    public addCustomer(customer: customer) {
        this.data.push(customer);
    }


}