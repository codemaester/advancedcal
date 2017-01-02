import { Event } from './event';
import { Participant } from './participant';
import { Moment } from 'moment';

export class Schedule {

  private currentEventIdx:number = 0;
  events:Array<Event> = new Array();
  participant:Participant;

  constructor(participant:Participant) {
    this.participant = participant;
  }

  addEvent(e:Event):void {
    this.events.push(e);
  }

  isNextFree(eventStart:Moment, eventEnd:Moment):boolean {
    this.forwardToNextEvent(eventStart);
    if (this.currentEventIdx >= this.events.length)
      return true;

    let currentEvent = this.events[this.currentEventIdx];
    return !this.isOverlapping(eventStart, eventEnd,
      currentEvent.start, currentEvent.end);
  }

  isOverlapping(eventStart1:Moment, eventEnd1:Moment,
    eventStart2:Moment, eventEnd2:Moment):boolean {
    return eventStart1.isSameOrBefore(eventEnd2)
      && eventEnd1.isAfter(eventStart2);
  }

  forwardToNextEvent(eventStart:Moment):void {
    for(;this.currentEventIdx < this.events.length;
        this.currentEventIdx++) {
      let currentEvent = this.events[this.currentEventIdx];
      if (currentEvent.end.isAfter(eventStart)) {
        return;
      }
    }
  }

}
