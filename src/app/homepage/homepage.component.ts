import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loggedOut } from '../app.actions';

import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  postFormData = {
    post: File = null,
    caption: null
  };

  postsDetails = [];

  isPostButtonClicked = false;

  constructor(private router: Router, private store: Store<{LoggedIn: boolean}>,
              private api: ApiService) { }

  leftSideButton = ['Upload Post', 'Invite Friends'];

  ngOnInit(): void {
    if (localStorage.getItem('email') === null){
      this.router.navigate(['/login']);
    }

    this.api.get('get-all-post')
    .subscribe( res => {

      res = JSON.parse(res);
      for ( const post of res.post){
        this.postsDetails.push(post);
      }
    });

    // const payload = {
    //   firstName: 'Kamal',
    //   lastName: 'Bisht',
    //   age: 23
    // };

    // this.api.get('http://localhost:5000/hello', payload)
    // .subscribe( res => {
    //   console.log('this is the hello response: ', res);
    // });
  }

  onUploadButton(): void{
    this.isPostButtonClicked = true;
  }

  closePostPopUp(): void{
    this.isPostButtonClicked = false;
  }

  handleFileUpload(files: File): void{
      this.postFormData.post = files;
  }

  onSubmitClicked(): void{
    const payload = new FormData();

    payload.append('post', this.postFormData.post[0]);
    payload.append('caption', this.postFormData.caption);
    payload.append('email', localStorage.getItem('email'));
    payload.append('date', Date());

    this.api.post('upload-post', payload)
    .subscribe( resp => {
      if (resp === '1'){
        this.closePostPopUp();
        location.reload();
      }
    });
  }

  onLogout(): void{
    localStorage.removeItem('email');
    localStorage.removeItem('password');

    this.store.dispatch(loggedOut());

    this.router.navigate(['/login']);
  }
}
