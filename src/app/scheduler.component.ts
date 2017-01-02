import { Component, OnInit, NgZone }      from '@angular/core';
import { Router }                         from '@angular/router';
import { Observable }                     from 'rxjs/Observable';

import * as moment                        from 'moment';
import { TypeaheadMatch }                 from 'ng2-bootstrap';

import { Participant }                    from './participant';
import { Booking }                        from './booking';
import { GlobalState }                    from './global-state';
import { CalendarService }                from './calendar.service';
import { AttendanceLevel, REQUIRED, LEVELS } from './attendance-level';
import { Duration, DURATIONS }            from './duration';
import { MeetingSlot }                    from './meeting-slot';

@Component({
  selector: 'scheduler',
  templateUrl: 'app/scheduler.component.html'
})
export class SchedulerComponent implements OnInit {

  participant: Participant = {email: "", name: "", attendanceLevel: REQUIRED};
  levels: Array<AttendanceLevel> = LEVELS;
  durations: Array<Duration> = DURATIONS;
  dataSource:Observable<any>;

  loading:boolean = false;
  slots:Array<MeetingSlot>;
  totalItems:number;
  itemsPerPage:number = 10;
  currentPage:number = 1;

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
    this.loading = true;
    this.calendarService.getAllocation(this.booking).then(
      (response:any) => this.zone.run(
        () => {
          this.booking.setSchedulesFromFreeBusy(response.result);
          this.booking.findFreeSlots();
          this.initPagination();
          this.updateSlotsPage();
          this.loading = false;
        })
    );
  }

 typeaheadOnSelect(e:TypeaheadMatch):void {
   this.participant.email = e.item.email;
   this.participant.name = e.item.name;
   this.onAdd();
 }

 initPagination():void {
   this.totalItems = this.booking.openSlots.length;
   this.currentPage = 1;
 }

 updateSlotsPage():void {
   this.slots = this.booking.openSlots.slice(
     (this.currentPage - 1) * this.itemsPerPage,
     this.currentPage * this.itemsPerPage);
 }

 public pageChanged(event:any):void {
   this.currentPage = event.page;
   this.updateSlotsPage();
   console.log('Page changed to: ' + event.page);
   console.log('Number items per page: ' + event.itemsPerPage);
 }

}
