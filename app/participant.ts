import { AttendanceLevel, REQUIRED, OPTIONAL, IMPORTANT }
  from './attendance-level';

export class Participant {
  attendanceLevel: AttendanceLevel;
  name: string;
  email: string;
}

export const PARTICIPANTS: Participant[] = [
  {email: "liam.burke@monarch.com", name: "Liam Burke", attendanceLevel: REQUIRED},
  {email: "paul.serene@monarch.com", name: "Paul Serene", attendanceLevel: OPTIONAL},
  {email: "beth.wilders@monarch.com", name: "Beth Wilders", attendanceLevel: IMPORTANT},
  {email: "jack.joyce@monarch.com", name: "Jack Joyce", attendanceLevel: REQUIRED}
];
