import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookAppointment } from 'src/app/models/book-appointment';
import { Patient } from 'src/app/models/patient.model';
import { BookAppointmentService } from 'src/app/services/book-appointment.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  [x: string]: any;

  appointment?:BookAppointment;
  appointmentNumber?: number;
  patientId?: number;
  patientName?:string;
  patientAge?:number;
  reasonToVisit?:string;
  dateAndtime?:string;
  consultationFee?:number;
  bookAppointmentForm?:FormGroup;
  //BookAppointmentService: any;
  errorMessage?:string;
  

  constructor(public router:Router, public formBuilder:FormBuilder,public bookappointment:BookAppointmentService,public activatedRoute: ActivatedRoute) { this.validateAppointment }

  ngOnInit(): void {

    this.appointment = new BookAppointment();

      
      this.bookAppointmentForm=this.formBuilder.group({

      appointmentNumber:['', [Validators.required, Validators.min(1)]],
      patientId:['', [Validators.required, Validators.min(1)]],
      patientName:['',[Validators.required, Validators.minLength(3)]],
      patientAge:['',[Validators.required, Validators.min(0), Validators.max(110)]],
      reasonToVisit:['',[]],
      dateAndtime:['',[Validators.required]],
      consultationFee:['',Validators.required]
     });
    

   
  }

  validateAppointment(appointmentNumber: number, patientId: number, patientName:string, patientAge:number, reasonToVisit:string, dateAndtime:string, consultationFee:number){
    this.patientId=this.bookAppointmentForm.get('patientId').value;
    console.log(this.patientId);
    this.appointmentNumber=this.bookAppointmentForm?.get('appointmentNumber')?.value;
    this.patientId=this.bookAppointmentForm?.get('patientId')?.value;
    this.patientName=this.bookAppointmentForm?.get('patientName')?.value;
    this.patientAge=this.bookAppointmentForm?.get('patientAge')?.value;
    this.reasonToVisit=this.bookAppointmentForm?.get('reasonToVisit')?.value;
    this.dateAndtime=this.bookAppointmentForm?.get('dateAndtime')?.value;
    this.consultationFee=this.bookAppointmentForm?.get('consultationFee')?.value;

    this.BookAppointmentService.validateAppointment(this.appointmentNumber, this.patientId, this.patientName, this.patientAge, this.reasonToVisit, this.dateAndtime, this.consultationFee)
    .subscribe(
      response => {
        console.log(response);
        if(response!=null){

        }
        else{
          this.errorMessage="Invalid Details Entered!";
          console.log("Booking Failed")
          this.router.navigate(['book-appointment'])
        }
      },

      error => {
        console.log("Appointment Booked Succesfully");
        this.router.navigate(['book-appointment'])
      }
    )




  }

}
