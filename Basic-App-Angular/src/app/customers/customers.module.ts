import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerManageComponent } from './customer-manage/customer-manage.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomerManageComponent, CustomerDashboardComponent],
  exports: [CustomerManageComponent, CustomerDashboardComponent]
})
export class CustomersModule { }
