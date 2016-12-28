import { Component, OnInit, NgZone }      from '@angular/core';
import { Router }                 from '@angular/router';
import { Observable }             from 'rxjs/Observable';
import * as moment from 'moment';
import { TypeaheadMatch } from 'ng2-bootstrap';

import { Participant }            from './participant';
import { Booking }                from './booking';
import { GlobalState }            from './global-state';
import { CalendarService }        from './calendar.service';
import { AttendanceLevel, REQUIRED, LEVELS } from './attendance-level';
import { Duration, DURATIONS } from './duration';
import { DateModel } from 'ng2-datepicker';

@Component({
  selector: 'scheduler',
  templateUrl: 'app/scheduler.component.html'
})
export class SchedulerComponent implements OnInit {

  participant: Participant = {email: "", name: "", attendanceLevel: REQUIRED};
  levels: Array<AttendanceLevel> = LEVELS;
  durations: Array<Duration> = DURATIONS;

  dataSource:Observable<any>;

  constructor(private booking: Booking, private state: GlobalState,
    private router: Router, private calendarService: CalendarService,
    private zone:NgZone) {

      this.dataSource = Observable.create((observer:any) => {
        this.calendarService.findUsers(this.participant.email)
          .then((response:any) => {
          if (!response.result) {
            observer.complete();
            return;
          }
          let users_result:Array<any> = response.result.users.map(
              user => ({
                'name': user.name.fullName,
                'email': user.primaryEmail })
          );
          zone.run(() => observer.next(users_result));
          observer.complete();
        })
      });
}


  ngOnInit(): void {
    if (!this.state.signedIn) {
      this.router.navigate(['/about']);
    }
  }

  onAdd(): void {
    this.booking.participants.push(this.participant);
    this.participant = {email: "", name: "", attendanceLevel: REQUIRED};
  }

  onRemove(i: number): void {
    this.booking.participants.splice(i, 1);
  }

  onSearch(): void {
  }

 typeaheadOnSelect(e:TypeaheadMatch):void {
   this.participant.email = e.item.email;
   this.participant.name = e.item.name;
   this.onAdd();
 }

}
