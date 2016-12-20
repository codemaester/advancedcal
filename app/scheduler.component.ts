import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';
import { Observable }             from 'rxjs/Observable';

import { TypeaheadMatch } from 'ng2-bootstrap';

import { Participant }            from './participant';
import { Booking }                from './booking';
import { GlobalState }            from './global-state';
import { CalendarService }        from './calendar.service';
import { AttendanceLevel, REQUIRED, OPTIONAL, IMPORTANT }
                                  from './attendance-level';

@Component({
  selector: 'scheduler',
  templateUrl: 'app/scheduler.component.html'
})
export class SchedulerComponent implements OnInit {

  levels: AttendanceLevel[] = [REQUIRED, IMPORTANT, OPTIONAL];
  participant: Participant = {email: "", name: "", attendanceLevel: REQUIRED};

  public dataSource:Observable<any>;
  public typeaheadLoading:boolean = false;
  public typeaheadNoResults:boolean = false;



  constructor(private booking: Booking, private state: GlobalState,
    private router: Router, private calendarService: CalendarService) {
      this.dataSource = Observable.create((observer:any) => {
        observer.next(this.participant.email);
      }).mergeMap((token:string) => this.calendarService.findUsers(token));
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
    this.calendarService.execute();
  }

 changeTypeaheadLoading(loading:boolean):void {
   this.typeaheadLoading = loading;
 }

 changeTypeaheadNoResults(noResult:boolean):void {
   this.typeaheadNoResults = noResult;
 }

 typeaheadOnSelect(e:any):void {
   this.participant.email = e.item.email;
   this.participant.name = e.item.name;
   this.onAdd();
 }

}
