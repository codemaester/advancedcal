import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { Booking }                from './booking';
import { Participant }                from './participant';
import * as moment                from 'moment';

import 'rxjs/add/observable/fromPromise';

declare var gapi: any;

@Injectable()
export class CalendarService {

  findUsers(token: string): Promise<any> {
    return gapi.client.request({
          'path': 'https://www.googleapis.com/admin/directory/v1/users',
          'params': {
            'customer': 'my_customer',
            'viewType':'domain_public',
            'query': token,
            'projection': 'basic',
            'fields': 'users(primaryEmail,name/fullName)',
            'maxResults': 10
          }
    });
  }

  getAllocation(booking: Booking): Promise<any> {
    return gapi.client.request({
          'path': 'https://www.googleapis.com/calendar/v3/freeBusy',
          'method': 'POST',
          'body': {
            'timeMin': moment(booking.start).toISOString(),
            'timeMax': moment(booking.start).add(14, 'd').toISOString(),
            'items': booking.participants.map(p => ({'id': p.email}))
          }
    });
  }
}
