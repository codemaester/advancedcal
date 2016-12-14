import { Component, OnInit }      from '@angular/core';
import { Participant }            from './participant';
import { Booking }                from './booking';
import { AttendanceLevel, REQUIRED, OPTIONAL, IMPORTANT }
                                  from './attendance-level';

@Component({
  selector: 'scheduler',
  templateUrl: 'app/scheduler.component.html'
})
export class SchedulerComponent implements OnInit {

  levels: AttendanceLevel[] = [REQUIRED, IMPORTANT, OPTIONAL];
  participant: Participant = {email: "", attendanceLevel: REQUIRED};

  constructor(
    private booking: Booking) { }

  ngOnInit(): void {
  }

  get diagnostic() { return JSON.stringify(this.participants); }

  onAdd(): void {
    this.booking.participants.push(this.participant);
    this.participant = {email: "", attendanceLevel: REQUIRED};
  }

  onRemove(i: number): void {
    this.booking.participants.splice(i, 1);
  }

}
