import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserModule } from './user.module';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  }
];

@NgModule({
  imports: [UserModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
