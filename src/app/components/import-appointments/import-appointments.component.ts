import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-import-appointments',
  templateUrl: './import-appointments.component.html',
  styleUrls: ['./import-appointments.component.css']
})
export class ImportAppointmentsComponent implements OnInit {
  @Output() onImportAppointments: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  importAppointmentsfromREST() {
    
    this.onImportAppointments.emit();
  }
}
