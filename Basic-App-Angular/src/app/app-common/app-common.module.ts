import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServiceService } from './identity/user-service.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    UserServiceService
  ]
})
export class AppCommonModule { }
