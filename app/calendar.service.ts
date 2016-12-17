import { Injectable } from '@angular/core';

declare var gapi: any;

@Injectable()
export class CalendarService {
  execute(): void {
      gapi.client.request({
          'path': 'https://www.googleapis.com/admin/directory/v1/users',
          'params': {
            'customer': 'my_customer',
            'viewType':'domain_public',
            'maxResults': 10
          }
      }).then((response:any) => {
        console.log(response.result)
      });
  }
}
