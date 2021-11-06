import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { RouterModule } from '@angular/router';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TopNavComponent, FooterComponent, MasterLayoutComponent, CustomerLayoutComponent],
  exports: [MasterLayoutComponent, CustomerLayoutComponent]
})
export class NavigationModule { }
