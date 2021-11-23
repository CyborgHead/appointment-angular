import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Appointment, AppointmentList } from '../../Appointment';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.css']
})
export class AppointmentItemComponent implements OnInit {
  @Input() appointment!: Appointment;
  @Output() onDeleteAppointment: EventEmitter<Appointment> = new EventEmitter();
  @Output() onUpdateAppointment: EventEmitter<Appointment> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(appointment: any) {
    this.onDeleteAppointment.emit(appointment);
  }

  onToggleUpdate(appointment: Appointment) {
    console.log('Toggled update appointment ID : ' + appointment.id);

    // TODO: display update form.

    // TODO: emit on Update button
    //this.onUpdateAppointment.emit(appointment);
  }

}
