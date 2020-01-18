import { Injectable } from '@angular/core';
import { Customer } from '@shared/models/customer';

import mockData from './MOCK_DATA.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CustomerService {
    private newCustomer: Customer;
    private readonly data = Array.from(mockData).filter(x => x.status).map(x => ({
        id: x.id,
        firstName: x.first_name,
        lastName: x.last_name,
        email: x.email,
        gender: x.gender
    } as Customer));

    constructor(private http: HttpClient) { }

    private get lastId() {
        return this.data[this.data.length - 1].id;
    }


    public getCustomers(): Observable<Array<Customer>> {
        return this.http.get<Array<Customer>>('/api/customer');
    }

    public getMockData(): Array<any> {
        return this.data;
    }

    public addCustomer(customer: Customer) {
        this.newCustomer = {
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