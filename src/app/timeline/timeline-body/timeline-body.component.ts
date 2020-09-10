import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { loggedOut } from '../../app.actions';

@Component({
  selector: 'app-timeline-body',
  templateUrl: './timeline-body.component.html',
  styleUrls: ['./timeline-body.component.css']
})
export class TimelineBodyComponent implements OnInit {

  constructor(private router: Router, private store: Store<{LoggedIn: boolean}>) { }

  ngOnInit(): void {
    if (localStorage.getItem('email') === null){
      this.router.navigate(['/login']);
    }
  }

  onUploadButton(): void{
    console.log('this is upload button');
  }
  onLogout(): void{
    localStorage.removeItem('email');
    localStorage.removeItem('password');

    this.store.dispatch(loggedOut());

    this.router.navigate(['/login']);
  }
}
