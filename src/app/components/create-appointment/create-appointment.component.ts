import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Appointment } from '../../Appointment';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  @Output() onCreateAppointment: EventEmitter<Appointment> = new EventEmitter();
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  date: string | undefined;
  startTime: string | undefined;
  endTime: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name) {
      alert('Please, add name!');
      return;
    }
    if(!this.email) {
      alert('Please, add email!');
      return;
    }
    if(!this.phone) {
      alert('Please, add phone!');
      return;
    }
    if(!this.date) {
      alert('Please, add date!');
      return;
    }
    if(!this.startTime) {
      alert('Please, add start time!');
      return;
    }
    if(!this.endTime) {
      alert('Please, add end time!');
      return;
    }
    console.log('Form submitted..');

    const newAppointment = {
      name: this.name,
      email: this.email,
      phoneNumber: this.phone,
      date: this.date,
      startTime: this.startTime,
      endTime: this.endTime
    }

    // TODO: emit event
    this.onCreateAppointment.emit(newAppointment);

    // clear form after save 
    this.name = '';
    this.email = '';
    this.phone = '';
    this.date = '';
    this.startTime = '';
    this.endTime = '';
  }

}
