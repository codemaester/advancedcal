import { Injectable } from '@angular/core';

import { Participant, PARTICIPANTS } from './participant';

@Injectable()
export class Booking {
  participants: Participant[] = PARTICIPANTS;
}
