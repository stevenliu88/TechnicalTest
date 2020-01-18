import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from '@feature/add-customer/add-customer.component';
import { NewPortalComponent } from '@feature/new-portal/new-portal.component';

const routes: Routes = [
  { path: '', redirectTo: '/new-portal', pathMatch: 'full' },
  { path: 'new-portal', component: NewPortalComponent },
  { path: 'add-customer', component: AddCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NewPortalComponent, AddCustomerComponent];
