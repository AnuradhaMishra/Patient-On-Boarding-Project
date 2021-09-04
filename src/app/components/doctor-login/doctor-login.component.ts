import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  doctor ?: Doctor;
  doctorId?: number;
  doctorPassword?: string;
  doctorLoginForm?:FormGroup;

  constructor(public router:Router,public activatedRoute: ActivatedRoute,public formBuilder:FormBuilder,public doctorService:DoctorService) { }

  ngOnInit(): void {
    this.doctor = new Doctor();
     this.doctorLoginForm=this.formBuilder.group({

      doctorId:['', [Validators.required, Validators.min(1)]],
      doctorPassword:['', [Validators.required, Validators.minLength(8),Validators.pattern('[a-zA-Z ]*')]],
     })
  }

  validateDoctor() {
   this.doctorId = this.doctorLoginForm?.get('doctorId')?.value;

  this.doctorPassword = this.doctorLoginForm?.get('doctorpassword')?.value

  }

}
