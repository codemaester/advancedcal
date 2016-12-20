import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import 'rxjs/add/observable/of';

declare var gapi: any;

@Injectable()
export class CalendarService {

  public users:Array<any> = [
    {name: "Liam Burke", email: "liam.burke@monarch.com"},
    {name: "Paul Seren", email: "paul.serene@monarch.com"},
    {name: "Beth Wilders", email: "beth.wilders@monarch.com"},
    {name: "Jack Joyce", email: "jack.joyce@monarch.com"}];


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

  findUsers(token: string): Observable<any> {
     let query = new RegExp(token, 'ig');
    return Observable.of(this.users.filter(
      (user:any) => {
        return query.test(user.name);
      }
    ));
  }

}
