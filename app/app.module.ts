import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }       from './app.component';
import { SchedulerComponent } from './scheduler.component';
import { SigninComponent }    from './signin.component';
import { SignoutComponent }   from './signout.component';
import { RoomComponent }      from './room.component';
import { routing }            from './app.routing';
import { Booking }            from './booking';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    SigninComponent,
    SignoutComponent,
    SchedulerComponent,
    RoomComponent
  ],
  providers: [
    Booking
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
