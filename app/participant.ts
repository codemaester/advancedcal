import { AttendanceLevel, REQUIRED, OPTIONAL, IMPORTANT }
  from './attendance-level';

export class Participant {
  attendanceLevel: AttendanceLevel;
  email: string;
}

export const PARTICIPANTS: Participant[] = [
  {email: "liam.burke@monarch.com", attendanceLevel: REQUIRED},
  {email: "paul.serene@monarch.com", attendanceLevel: OPTIONAL},
  {email: "beth.wilders@monarch.com", attendanceLevel: IMPORTANT},
  {email: "jack.joyce@monarch.com", attendanceLevel: REQUIRED}
];
