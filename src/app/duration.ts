
export const DURATIONS:Array<Duration> = [
  {minutes:15, name:"15 min"}, {minutes:30, name:"30 min"},
  {minutes:45, name:"45 min"}, {minutes:60, name:"1 h"}];

export class Duration {
  minutes: number;
  name: string;
}
