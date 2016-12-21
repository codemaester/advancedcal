import { Injectable } from '@angular/core';


@Injectable()
export class GlobalState {
  signedIn: boolean = false;
  userName: string = "";
  imageUrl: string = "";
}