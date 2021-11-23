import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment, AppointmentList } from '../../Appointment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments?: Appointment[] = [];
  appointmentList: AppointmentList = {};

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    //this.appointmentService.getAppointments()
    //        .subscribe((appointments) => this.appointments = appointments);
    
    this.appointmentService.getAppointments().subscribe(
      (res: AppointmentList) => {
        console.log(res);
        this.appointmentList = res;
        this.appointments = this.appointmentList.data;
        console.log(this.appointments);
      },
      (err) => {
        console.log(err);
      }
      );  
  }

  deleteAppointment(appointment: Appointment){
    console.log('deleting appointment :' + appointment.id);
    this.appointmentService.deleteAppointment(appointment)
            .subscribe(() => (this.appointments = this.appointments?.filter((a) => a.id !== appointment.id)));
  }

}
