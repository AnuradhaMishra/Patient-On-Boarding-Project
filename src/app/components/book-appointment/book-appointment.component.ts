import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  patient?:Patient;
  appointmentNumber?: number;
  patientId?: number;
  patientName?:string;
  patientAge?:number;
  reasonToVisit?:string;
  dateAndtime?:string;
  consultationFee?:number;
  bookAppointmentForm?:FormGroup;
  

  constructor(public formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.patient = new Patient();
     this.bookAppointmentForm=this.formBuilder.group({

      patientAppointment:['', [Validators.required, Validators.min(1)]],
      patientId:['', [Validators.required, Validators.min(1)]],
      patientName:['',[Validators.required, Validators.minLength(3)]],
      patientAge:['',[Validators.required, Validators.min(0), Validators.max(110)]],
      reasonToVisit:['',[]],
      dateAndtime:['',[Validators.required]],
      consultationFee:['',Validators.required]
     })
  }

}
