import { Component, OnInit, NgZone }      from '@angular/core';
import { GlobalState }            from './global-state';
import { Router }                 from '@angular/router';

declare var gapi: any;

@Component({
  selector: 'calendar-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private state: GlobalState, private router: Router,
    private zone: NgZone) {
  }

  ngOnInit(): void {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': (googleUser: any) => this.zone.run(
        () => { this.onSuccess(googleUser); }
      ),
      'onfailure': this.onFailure
    });
  }

  onSuccess(googleUser: any): void {
    this.state.signedIn = true;
    this.router.navigate(['/scheduler']);
  }

  onFailure(error: any): void {
    console.log(error);
  }

  signOut(): void {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(
      () => this.zone.run(
        () => {
          this.state.signedIn = false;
          this.router.navigate(['/about']);
        }
      )
    );
  }
}
