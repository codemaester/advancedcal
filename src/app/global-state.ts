import { Injectable } from '@angular/core';


@Injectable()
export class GlobalState {
  autoApply: boolean = true;
  firstWeekdaySunday: boolean = false;
  format: string = "DD.MM.YYYY";

  signedIn: boolean = false;
  userName: string = "";
  imageUrl: string = "";
}
