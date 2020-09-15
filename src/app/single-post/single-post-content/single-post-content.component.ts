import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { loggedOut } from 'src/app/app.actions';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-single-post-content',
  templateUrl: './single-post-content.component.html',
  styleUrls: ['./single-post-content.component.css']
})
export class SinglePostContentComponent implements OnInit {

  // postDetails = JSON.parse(localStorage.getItem('currentPost'));

  postDetails: any;

  constructor(private router: Router, private store: Store<{LoggedIn: boolean}>,
              private route: ActivatedRoute, private api: ApiService
    ) { }

  ngOnInit(): void {
    // if (localStorage.getItem('currentPost') === null){
    //   this.router.navigate(['/login']);
    // }
    this.route.paramMap
    .subscribe( params => {
      const payload = {
        id: params.get('id')
      };

      this.api.getWithParams('get-post', payload)
      .subscribe( resp => {
        resp = JSON.parse(resp);
         console.log('this is reponse after parse: ', resp.post[0]);
        this.postDetails = resp.post[0];
      });
    });
  }

  onUploadButton(): void{
    console.log('This is upload button');
  }

  onLogout(): void{
    localStorage.removeItem('email')

    this.store.dispatch(loggedOut());
    this.router.navigate(['/login']);
  }

}
