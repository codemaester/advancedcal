import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var gapi: any;

@Component({
  selector: 'sign-out',
  template: 'Signin out ...'
})
export class SignoutComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      this.router.navigate(['/signin']);
    });
  }

}
