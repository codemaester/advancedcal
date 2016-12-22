import { Injectable } from '@angular/core';

import { Participant } from './participant';

@Injectable()
export class Booking {
  participants: Participant[] = [];
}
