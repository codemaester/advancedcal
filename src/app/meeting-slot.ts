import { Moment } from 'moment';
import * as moment from 'moment';
import { AttendanceLevel, LEVELS, REQUIRED, IMPORTANT, OPTIONAL } from './attendance-level';
import { Participant } from './participant';

export class MeetingSlot {
  start:Moment;
  end:Moment;
  freeAttendeesByLevel:Map<AttendanceLevel,number> = new Map();

  constructor(start:Moment, end:Moment) {
    this.start = moment(start);
    this.end = moment(end);
    for(let level of LEVELS) {
      this.freeAttendeesByLevel.set(level, 0);
    }
  }

  countAttendee(attendee:Participant) {
    this.freeAttendeesByLevel.set(attendee.attendanceLevel,
      this.freeAttendeesByLevel.get(attendee.attendanceLevel) + 1);
  }

  validateRequired(required: number): boolean {
    return this.freeAttendeesByLevel.get(REQUIRED) == required;
  }

  getImportant(): number {
    return this.freeAttendeesByLevel.get(IMPORTANT);
  }

  getOptional(): number {
    return this.freeAttendeesByLevel.get(OPTIONAL);
  }
}
