import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';

import { SignupComponent } from './components/signup/signup.component';
import { PatientLoginSuccessComponent } from './components/patient-login-success/patient-login-success.component';
import { AboutAppComponent } from './components/about-app/about-app.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { OrderMedicinesComponent } from './components/order-medicines/order-medicines.component';

const routes: Routes = [
  { path: '', component:HomePageComponent },
  { path: 'patient-login', component:PatientLoginComponent },
  { path: 'signup', component:SignupComponent },
  { path: 'patient-login-success', component:PatientLoginSuccessComponent },
  { path: 'about-app', component:AboutAppComponent },
  { path: 'appointment', component:BookAppointmentComponent},
  { path: 'medicines', component:OrderMedicinesComponent},
  { path: 'doctor-login', component:DoctorLoginComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
