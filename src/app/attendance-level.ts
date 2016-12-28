export class AttendanceLevel {
 id: number;
 name: string;
}

export const REQUIRED: AttendanceLevel = {id: 1, name: "required"};
export const IMPORTANT: AttendanceLevel = {id: 2, name: "important"};
export const OPTIONAL: AttendanceLevel = {id: 3, name: "optional"};

export const LEVELS: AttendanceLevel[] = [REQUIRED, IMPORTANT, OPTIONAL];
