import { Injectable } from '@angular/core';

import { Participant } from './participant';
import { Duration, DURATIONS } from './duration';
import { DateModel } from 'ng2-datepicker';

@Injectable()
export class Booking {
  participants: Participant[] = [];
  start:DateModel;
  duration: Duration = DURATIONS[0];
}
