import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }        from './app.component';
import { SchedulerComponent }  from './scheduler.component';
import { RoomComponent }       from './room.component';
import { routing }             from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    SchedulerComponent,
    RoomComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
