import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { loggedOut } from 'src/app/app.actions';

@Component({
  selector: 'app-single-post-content',
  templateUrl: './single-post-content.component.html',
  styleUrls: ['./single-post-content.component.css']
})
export class SinglePostContentComponent implements OnInit {

  postDetails = JSON.parse(localStorage.getItem('currentPost'));

  constructor(private router: Router, private store: Store<{LoggedIn: boolean}>,
              private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentPost') === null){
      this.router.navigate(['/login']);
    }
  }

  ngOnDestroy(): void {
    localStorage.removeItem('currentPost');
  }

  onUploadButton(): void{
    console.log('This is upload button');
  }

  onLogout(): void{
    localStorage.removeItem('email');
    localStorage.removeItem('password');

    this.store.dispatch(loggedOut());
    this.router.navigate(['/login']);
  }

}
