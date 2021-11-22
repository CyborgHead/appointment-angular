import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Appointment } from '../../Appointment';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.css']
})
export class AppointmentItemComponent implements OnInit {
  @Input() appointment!: Appointment;
  @Output() onDeleteAppointment: EventEmitter<Appointment> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Appointment> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(appointment: any) {
    this.onDeleteAppointment.emit(appointment);
  }

  onToggle(appointment: Appointment | undefined) {
    this.onToggleReminder.emit(appointment);
  }

}
