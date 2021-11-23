import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Appointment Scheduler';
  showCreateAppointment: boolean = false;
  subscription: Subscription | undefined;

  constructor(private uiService: UiService) {
      this.subscription = this.uiService.onToggleAddAppointment()
                              .subscribe((value) => (this.showCreateAppointment = value));
   }

  ngOnInit(): void {
  }

  toggleCreateAppointment() {
    this.uiService.toggleAddAppointment();
    console.log('Toggled create appointment..');
  }
}
