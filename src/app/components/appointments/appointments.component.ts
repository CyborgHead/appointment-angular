import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment, AppointmentList } from '../../Appointment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[] | undefined;
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

  createAppointment(appointment: Appointment) {
    console.log('creating appointment :' + appointment.name);
    console.log(this.appointments);
    this.appointmentService.createAppointment(appointment)
                .subscribe((appointment) => (this.appointments?.push(appointment)));
    console.log(this.appointments);
  }  

  toggleUpdateAppointment(appointment: Appointment) {
    //console.log('toggled updated appointment :' + appointment.id);
  }

  updateAppointment(appointment: Appointment){
    console.log('updating appointment :' + appointment.id);
    this.appointmentService.updateAppointment(appointment).subscribe();
  }

  deleteAppointment(appointment: Appointment){
    console.log('deleting appointment :' + appointment.id);
    this.appointmentService.deleteAppointment(appointment)
            .subscribe(() => (this.appointments = this.appointments?.filter((a) => a.id !== appointment.id)));
  }

}
