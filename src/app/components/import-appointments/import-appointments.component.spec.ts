import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAppointmentsComponent } from './import-appointments.component';

describe('ImportAppointmentsComponent', () => {
  let component: ImportAppointmentsComponent;
  let fixture: ComponentFixture<ImportAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
