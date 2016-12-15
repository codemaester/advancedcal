import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var gapi: any;


@Component({
  selector: 'calendar-signin',
  templateUrl: 'app/signin.component.html'
})
export class SigninComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
      gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': (googleUser: any) => this.onSuccess(googleUser),
        'onfailure': this.onFailure
      });
  }

  onSuccess(googleUser: any): void {
    this.router.navigate(['/scheduler']);
  }

  onFailure(error: any): void {
    console.log(error);
  }

}
