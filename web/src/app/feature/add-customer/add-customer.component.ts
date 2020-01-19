import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CustomerService } from '@shared/service/customer.service';
import { Router } from '@angular/router'; 
import { Customer } from '@shared/models/customer';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  public isDisabledSubmitBtn: boolean;
  public customerForm: FormGroup;
  public customer: Customer;

  constructor(public customerService: CustomerService, private fb: FormBuilder, public router: Router) {
    this.customerForm = fb.group({
      firstName: fb.control('', Validators.required),
      lastName: fb.control('', Validators.required),
      email: fb.control('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      gender: fb.control('Male')
    });
  }

  ngOnInit() {
    this.isDisabledSubmitBtn = false;
  }

  get firstName(): AbstractControl{
    return this.customerForm.get('firstName');
  }

  get lastName(): AbstractControl{
    return this.customerForm.get('lastName');
  }

  get email(): AbstractControl{
    return this.customerForm.get('email');
  }
  
  get formGroupValidation() {
    return this.customerForm.status === 'INVALID';
  }

  Submit() {
    this.customer = this.customerService.mappingCustomer(this.customerForm.value);
    this.customerService.addCustomer(this.customer).subscribe();
    this.router.navigate(['new-portal']);
  }
}
