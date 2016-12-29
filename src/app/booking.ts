import { Injectable } from '@angular/core';

import { Participant } from './participant';
import { Duration, DURATIONS } from './duration';

@Injectable()
export class Booking {
  title: string = "";
  description: string = "";
  location: string = "";

  participants: Participant[] = [];
  start: Date;
  duration: Duration = DURATIONS[0];
}
