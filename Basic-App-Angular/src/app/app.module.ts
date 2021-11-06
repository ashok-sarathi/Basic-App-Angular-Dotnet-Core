import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { HttpClientModule } from '@angular/common/http';
import { AppCommonModule } from './app-common/app-common.module';

@NgModule({
  declarations: [		
    AppComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppCommonModule,
    AppRoutingModule,
    NavigationModule,
    AppCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
