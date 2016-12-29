import { Injectable } from '@angular/core';


@Injectable()
export class GlobalState {
  // Signin state and data from Google account
  signedIn: boolean = false;
  userName: string = "";
  imageUrl: string = "";
  // Date picker options
  autoclose: boolean = true;
  weekStart: number = 1;
  format: string = "dd.mm.yyyy";
}
