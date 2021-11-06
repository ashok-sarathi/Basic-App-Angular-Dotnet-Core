import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CustomersModule } from '../customers/customers.module';

@NgModule({
  imports: [
    CommonModule,
    CustomersModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
