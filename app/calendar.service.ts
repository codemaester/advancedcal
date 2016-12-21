import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
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

}
