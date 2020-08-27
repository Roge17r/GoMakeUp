import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
  service: string;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }

  public create({
    provider,
    date,
    service,
  }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date, service });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
