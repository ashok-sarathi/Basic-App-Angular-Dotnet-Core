import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiModule } from './ui.module';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user-routing.module').then(m => m.UserRoutingModule)
  }
];

@NgModule({
  imports: [UiModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
