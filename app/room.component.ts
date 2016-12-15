import { Component, OnInit }      from '@angular/core';
import { GlobalState }            from './global-state';
import { Router }                 from '@angular/router';

@Component({
  selector: 'room',
  templateUrl: 'app/room.component.html'
})
export class RoomComponent implements OnInit {

  constructor(private state: GlobalState, private router: Router) {
  }

  ngOnInit(): void {
    if (!this.state.signedIn) {
      this.router.navigate(['/about']);
    }
  }

}
