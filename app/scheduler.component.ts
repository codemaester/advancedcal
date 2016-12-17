import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';
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
  participant: Participant = {email: "", attendanceLevel: REQUIRED};

  constructor(private booking: Booking, private state: GlobalState,
    private router: Router, private calendarService: CalendarService) {
  }

  ngOnInit(): void {
    if (!this.state.signedIn) {
      this.router.navigate(['/about']);
    }
  }

  onAdd(): void {
    this.booking.participants.push(this.participant);
    this.participant = {email: "", attendanceLevel: REQUIRED};
  }

  onRemove(i: number): void {
    this.booking.participants.splice(i, 1);
  }

  onSearch(): void {
    this.calendarService.execute();
  }

}
