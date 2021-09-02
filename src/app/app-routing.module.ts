import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PatientLoginSuccessComponent } from './components/patient-login-success/patient-login-success.component';
import { AboutAppComponent } from './components/about-app/about-app.component';


const routes: Routes = [
  { path: '', component:HomePageComponent },
  { path: 'patient-login', component:PatientLoginComponent },
  { path: 'doctor-login', component:DoctorLoginComponent },
  { path: 'signup', component:SignupComponent },
  { path: 'patient-login-success', component:PatientLoginSuccessComponent },
  { path: 'about-app', component:AboutAppComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
