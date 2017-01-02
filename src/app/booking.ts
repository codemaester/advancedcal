import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { Schedule } from './schedule';
import { Event } from './event';
import { MeetingSlot } from './meeting-slot';
import { Duration, DURATIONS } from './duration';
import { GlobalState } from './global-state';
import { REQUIRED, AttendanceLevel, LEVELS } from './attendance-level';
import * as moment from 'moment';
import { Moment } from 'moment';

@Injectable()
export class Booking {
  title: string = "";
  description: string = "";
  location: string = "";

  participants: Participant[] = [];
  start: Date = new Date();
  duration: Duration = DURATIONS[1];

  schedules:Array<Schedule>;

  lookAheadDays:number = 14;
  hourMin:number = 10;
  hourMax:number = 17;

  attendeeLevels:Map<AttendanceLevel,number> = new Map();
  openSlots:Array<MeetingSlot>;

  constructor(private global: GlobalState) {
    this.participants.push(
      {name:global.userName, email:global.email, attendanceLevel:REQUIRED});
  }


  setSchedulesFromFreeBusy(freeBusy:any):void {
    this.schedules = new Array();

    for(let participant of this.participants) {
      let schedule:Schedule = new Schedule(participant);
      this.schedules.push(schedule);

      for(let entry of freeBusy.calendars[participant.email].busy) {
        schedule.addEvent({start:moment(entry.start), end:moment(entry.end)});
      }
    }
  }

  findFreeSlots() {
    this.openSlots = new Array();
    this.countAttendeeLevels();
    this.searchAllDays();
  }

  private countAttendeeLevels() {
    for(let level of LEVELS) {
      this.attendeeLevels.set(level, 0);
    }

    for(let attendee of this.participants) {
      this.attendeeLevels.set(attendee.attendanceLevel,
        this.attendeeLevels.get(attendee.attendanceLevel) + 1);
    }
  }

  private searchAllDays() {
    for(let dayRelative:number=0;dayRelative<=this.lookAheadDays;dayRelative++) {
      let dayStart:Moment = moment(this.start).add(dayRelative, 'd');

      // don't look into the past
      if (dayRelative > 0)
        dayStart.hour(this.hourMin).startOf('hour');
      // skip weekends
      if (dayStart.day() == 0 || dayStart.day() == 6)
        continue;

      let dayEnd:Moment = moment(this.start)
        .hour(this.hourMax).startOf('hour').add(dayRelative, 'd');
      this.findFreeSlotsforDay(dayStart, dayEnd);
    }
  }

  private findFreeSlotsforDay(dayStart:Moment, dayEnd:Moment) {
    let meetingStart = moment(dayStart);
    while(meetingStart.isSameOrBefore(dayEnd)) {
      let meetingEnd = moment(meetingStart).add(this.duration.minutes, 'm');
      this.validateSlotWithParticipants(meetingStart, meetingEnd);
      meetingStart.add(this.duration.minutes, 'm');
    }
  }

  private validateSlotWithParticipants(meetingStart:Moment, meetingEnd:Moment) {
    let slot = new MeetingSlot(meetingStart, meetingEnd);
    for(let schedule of this.schedules) {
      if (schedule.isNextFree(meetingStart, meetingEnd)) {
        slot.countAttendee(schedule.participant);
      }
    }

    if (slot.validateRequired(this.attendeeLevels.get(REQUIRED))) {
      this.openSlots.push(slot);
    }
  }

}
