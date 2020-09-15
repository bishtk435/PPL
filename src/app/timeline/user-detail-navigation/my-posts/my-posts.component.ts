import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  postsDetails = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    const payload = {
      email: localStorage.getItem('email')
    };

    this.api.getMyPosts('get-my-posts', payload)
    .subscribe( resp => {
      resp = JSON.parse(resp);
      for ( const post of resp.post){
        this.postsDetails.push(post);
      }
    });
  }

}
