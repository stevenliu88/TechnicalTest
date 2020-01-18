import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { NewPortalComponent } from './new-portal/new-portal.component';
const routes: Routes = [
  { path: '', redirectTo: '/NewPortal', pathMatch: 'full'},
  { path: 'NewPortal', component: NewPortalComponent },
  { path: 'AddCustomer', component: AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NewPortalComponent, AddCustomerComponent];
