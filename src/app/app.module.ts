import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { AppointmentItemComponent } from './components/appointment-item/appointment-item.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { ImportAppointmentsComponent } from './components/import-appointments/import-appointments.component';
import { CustomHttpInterceptor } from './services/custom-http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    AppointmentsComponent,
    AppointmentItemComponent,
    CreateAppointmentComponent,
    ImportAppointmentsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
