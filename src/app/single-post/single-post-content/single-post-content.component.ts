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

  postDetails: any;

  constructor(private router: Router, private store: Store<{LoggedIn: boolean}>,
              private route: ActivatedRoute, private api: ApiService
    ) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe( params => {
      const payload = {
        id: params.get('id')
      };

      this.api.getWithParams('get-post', payload)
      .subscribe( resp => {
        resp = JSON.parse(resp);
        this.postDetails = resp.post[0];
      });
    });
  }

  onUploadButton(): void{
    console.log('This is upload button');
  }

  onLogout(): void{
    localStorage.removeItem('email');

    this.store.dispatch(loggedOut());
    this.router.navigate(['/login']);
  }

}
