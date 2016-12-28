import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { TypeaheadModule } from 'ng2-bootstrap';
import { DatePickerModule } from 'ng2-datepicker';

import { AppComponent }       from './app.component';
import { SchedulerComponent } from './scheduler.component';
import { AboutComponent }     from './about.component';
import { RoomComponent }      from './room.component';
import { routing }            from './app.routing';
import { GlobalState }        from './global-state';
import { Booking }            from './booking';
import { CalendarService }   from './calendar.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    TypeaheadModule.forRoot(),
    DatePickerModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    SchedulerComponent,
    RoomComponent
  ],
  providers: [
    Booking, GlobalState, CalendarService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}