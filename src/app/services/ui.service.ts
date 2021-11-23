import { Injectable } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddAppointment: boolean = false;
  private addAppointmentSubject = new Subject<any>();

  constructor() { }

  toggleAddAppointment(): void {
    this.showAddAppointment = !this.showAddAppointment;
    this.addAppointmentSubject.next(this.showAddAppointment);
  }

  onToggleAddAppointment(): Observable<any> {
    return this.addAppointmentSubject.asObservable();
  }
}
