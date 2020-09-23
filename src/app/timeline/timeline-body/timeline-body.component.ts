import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/core/api.service';

import { loggedOut } from '../../app.actions';

@Component({
  selector: 'app-timeline-body',
  templateUrl: './timeline-body.component.html',
  styleUrls: ['./timeline-body.component.css']
})
export class TimelineBodyComponent implements OnInit {

  constructor(private router: Router,
              private store: Store<{LoggedIn: boolean}>,
              private api: ApiService
              ) { }

  ngOnInit(): void {
    if (localStorage.getItem('email') === null){
      this.router.navigate(['/login']);
    }

    this.api.authorizateUser(localStorage.getItem('token'))
    .subscribe(resp => {
      console.log('this is server response: ', resp);
    });
  }

  onUploadButton(): void{
  }

  onLogout(): void{
    localStorage.removeItem('email');
    localStorage.removeItem('password');

    this.store.dispatch(loggedOut());

    this.router.navigate(['/login']);
  }
}
