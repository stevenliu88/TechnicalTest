import mockData from './MOCK_DATA.json';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CustomerService {
    public getMockData(): Array<any> {
        var data = Array.from(mockData).map(x =>({
                    id: x.id,
                    name: `${x.first_name} ${x.last_name}`,
                    email: `${x.email}`,
                    gender: `${x.gender}`
                }))
        return data;
    }
}