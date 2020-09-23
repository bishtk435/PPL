import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';

import { loggedOut } from '../app.actions';
import { ApiService } from '../core/api.service';
import { loadPost } from './post.actions';

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

  postsDetails$: Observable<any>;

  isPostButtonClicked = false;

  constructor(private router: Router,
              private store: Store<{posts: any}>,
              private api: ApiService
            ){
                this.store.pipe(select('posts')).subscribe( resp => {
                  console.log('this is post value in store: ', resp);
                  this.postsDetails$ = resp['postsDetails'];
                  console.log('this is postsDetails$', this.postsDetails$);
                });
              }

  ngOnInit(): void {
    if (localStorage.getItem('email') === null){
      this.router.navigate(['/login']);
    }
    console.log('this is homepage ngOnInit');
    this.store.dispatch(loadPost());

    // this.store.pipe(select('post')).subscribe( resp => {
    //   console.log('this is post data: ', resp.postsDetails);
    // });
  }

  ngOnChanges(): void {
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
