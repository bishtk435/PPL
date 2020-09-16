import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  postDetails: any = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    const payload = {
      email: localStorage.getItem('email')
    };

    this.api.getMyPosts('get-my-posts', payload)
    .subscribe( resp => {
      resp = JSON.parse(resp);
      for ( const post of resp.post){
        this.postDetails.push(post);
      }
  }); }

  goToPostDetails(id): void{
    this.router.navigate(['/post', id]);
  }
}
