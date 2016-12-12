import { Component, OnInit } from '@angular/core';
import {Participant} from './participant';

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
    this.participants = [
      new Participant("liam.burke@monarch.com", "required"),
      new Participant("paul.serene@monarch.com", "optional"),
      new Participant("beth.wilders@monarch.com", "important"),
      new Participant("jack.joyce@monarch.com", "required")];
  }

  get diagnostic() { return JSON.stringify(this.participants); }

  onAdd(): void {
    this.participants.push(this.currentParticipant);
    this.currentParticipant = new Participant("", "required");
  }
}
