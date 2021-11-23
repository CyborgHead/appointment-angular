import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Appointment, ServiceResponse } from '../Appointment';
//import { APPOINTMENTS } from '../mock-appointments';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
private apiUrl = 'https://uhtz68ly1g.execute-api.eu-west-1.amazonaws.com/api/v1/appointment';

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<ServiceResponse<Appointment[]>>{
    /** Read from mock before testing with real backend.
      const appointments = of(APPOINTMENTS);
      return appointments; 
    */

    return this.http.get(this.apiUrl).pipe(catchError(this.handleError));
  }

  createAppointment(appointment: Appointment): Observable<Appointment>{
    return this.http.post<Appointment>(this.apiUrl, appointment, httpOptions).pipe(catchError(this.handleError));
  }

  updateAppointment(appointment: Appointment): Observable<Appointment>{
    return this.http.put<Appointment>(this.apiUrl, appointment, httpOptions).pipe(catchError(this.handleError));
  }

  deleteAppointment(appointment: Appointment): Observable<Appointment>{
    const url = `${this.apiUrl}/${appointment.id}`;
    return this.http.delete<Appointment>(url).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
