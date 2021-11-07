import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerLayoutComponent } from './navigation/customer-layout/customer-layout.component';
import { MasterLayoutComponent } from './navigation/master-layout/master-layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MasterLayoutComponent,
    loadChildren: () => import('./dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)
  },
  {
    path: 'customers',
    component: CustomerLayoutComponent,
    loadChildren: () => import('./customers/customers-routing.module').then(m => m.CustomersRoutingModule)
  },
  {
    path: '',
    component: CustomerLayoutComponent,
    loadChildren: () => import('./ui/ui-routing.module').then(m => m.UiRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
