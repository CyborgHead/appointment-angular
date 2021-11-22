export interface ServiceResponse<t> {
  statusMessage?: string,
  statusCode?: string,
  data?: t
}

export interface Appointment {
    id?: string;
    name: string;
    email: string;
    phone: string;
    startTime: string;
    endTime: string;
    date: string;
  }

export interface AppointmentList {
    statusMessage?: string,
    statusCode?: string,
    data?: Appointment[]
}

export class AppointmentList {
    public static AppointmentList: AppointmentList = {
        statusMessage: 'StatusMessage',
        statusCode: 'StatusCode',
        data: []
    }
}
