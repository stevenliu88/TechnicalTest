import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-portal',
  templateUrl: './new-portal.component.html',
  styleUrls: ['./new-portal.component.scss']
})
export class NewPortalComponent {

  constructor(
    private router: Router) { }

  addCustomer = () => {
    this.router.navigate(['/add-customer']);
  }
}
