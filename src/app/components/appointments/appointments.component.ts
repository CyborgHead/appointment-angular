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
  loadedAppointments: Appointment[] | undefined;

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
    this.appointmentService.createAppointment(appointment).subscribe();
    this.appointments?.push(appointment);
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

  importAppointments(appointments: Appointment[]) {
    //console.log(`importing ${appointments.length} appointments..`);
    console.log('Importing from REST api..');
    this.appointmentService.loadAppointmentsFromREST().subscribe((result) => (this.loadedAppointments = result));

    /** for manual add
    const newAppointment = {
      name: 'pushed appointment',
      email: 'pushed@appointment.com',
      phoneNumber: '0000000000111',
      date: '2021-11-23T12:44:47',
      startTime: '2021-11-23T12:44:00',
      endTime: '2021-11-23T12:45:00'
    }
    appointments = [newAppointment];
    appointments.push(newAppointment);
    */

    console.log(this.loadedAppointments);
    //this.appointmentService.importAppointments(appointments).subscribe();
  }

}
