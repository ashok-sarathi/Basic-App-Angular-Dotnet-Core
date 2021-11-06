import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerManageComponent } from './customer-manage/customer-manage.component';
import { CustomersModule } from './customers.module';

const routes: Routes = [
  {
    path: '',
    component: CustomerDashboardComponent
  },
  {
    path: 'manage',
    component: CustomerManageComponent
  }
];

@NgModule({
  imports: [CustomersModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
