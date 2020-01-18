import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-portal',
  templateUrl: './new-portal.component.html',
  styleUrls: ['./new-portal.component.css']
})
export class NewPortalComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
    console.log(this.customerService.getMockData());
  }
  AddCustomer = function () {
    this.router.navigate(['/AddCustomer']);
};

}
