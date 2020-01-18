import mockData from './MOCK_DATA.json';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CustomerService {
    public getMockData(): Array<any> {
        return mockData;
    }
}