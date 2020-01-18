import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerForm: FormGroup;
  constructor(fb: FormBuilder) { 
    this.customerForm = fb.group({
      firstName: fb.control('',Validators.required),
      lastName: fb.control('',Validators.required),
      email: fb.control('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      gender: fb.control('')
  });
  }

  ngOnInit() {
    
  }

}
