import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AdditionalComponent } from './additional/additional.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayformComponent } from './displayform/displayform.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import {  HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AllUserDetailsComponent } from './all-user-details/all-user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AdditionalComponent,
    DisplayformComponent,
    UserDetailsComponent,
    AllUserDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
