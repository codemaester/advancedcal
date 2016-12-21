import { AttendanceLevel, REQUIRED, OPTIONAL, IMPORTANT }
  from './attendance-level';

export class Participant {
  attendanceLevel: AttendanceLevel;
  name: string;
  email: string;
}
