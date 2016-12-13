import { Component, OnInit } from '@angular/core';
import {Participant} from './participant';

const PARTICIPANTS: Participant[] = [
  {email: "liam.burke@monarch.com", level: "required"},
  {email: "paul.serene@monarch.com", level: "optional"},
  {email: "beth.wilders@monarch.com", level: "important"},
  {email: "jack.joyce@monarch.com", level: "required"}

];

@Component({
  selector: 'scheduler',
  templateUrl: 'app/scheduler.component.html'
})
export class SchedulerComponent implements OnInit {
  currentParticipant: Participant = new Participant("", "required");
  participants: Participant[];
  levels: String[] = ["required", "important", "optional"];
  level: String = "important";

  ngOnInit(): void {
    this.participants = PARTICIPANTS;
  }

  get diagnostic() { return JSON.stringify(this.participants); }

  onAdd(): void {
    this.participants.push(this.currentParticipant);
    this.currentParticipant = new Participant("", "required");
  }
}
