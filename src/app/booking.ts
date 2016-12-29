import { Injectable } from '@angular/core';

import { Participant } from './participant';
import { Duration, DURATIONS } from './duration';
import { GlobalState } from './global-state';
import { REQUIRED } from './attendance-level';

@Injectable()
export class Booking {
  title: string = "";
  description: string = "";
  location: string = "";

  participants: Participant[] = [];
  start: Date = new Date();
  duration: Duration = DURATIONS[0];

  constructor(private global: GlobalState) {
    this.participants.push(
      {name:global.userName, email:global.email, attendanceLevel:REQUIRED});
  }
}
