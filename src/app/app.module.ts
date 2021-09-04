import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutAppComponent } from './components/about-app/about-app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PatientLoginSuccessComponent } from './components/patient-login-success/patient-login-success.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { OrderMedicinesComponent } from './components/order-medicines/order-medicines.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PatientLoginComponent,
    DoctorLoginComponent,
    SignupComponent,
    AboutUsComponent,
    AboutAppComponent,
    ContactUsComponent,
    PatientLoginSuccessComponent,
    BookAppointmentComponent,
    OrderMedicinesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
