import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CustomerService } from '@shared/service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  public isDisabledSubmitBtn: boolean;
  customerForm: FormGroup;

  constructor(public customerService: CustomerService, private fb: FormBuilder) {
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
    this.customerService.addCustomer(this.customerForm.value);
  }
}
