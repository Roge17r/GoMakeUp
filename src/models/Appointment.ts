import { uuid } from 'uuidv4';

interface Services {
  Hair: string;

  Facial: string;

  MakeUp: string;
}

class Appointment {
  id: string;

  provider: string;

  date: Date;

  services: Services;

  constructor(provider: string, date: Date, services: Services) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
    this.services = services;
  }
}

export default Appointment;
