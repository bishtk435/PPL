import { Component, OnInit, Input } from '@angular/core';

import { Socket } from 'ngx-socket-io'; 

import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-post-stats',
  templateUrl: './post-stats.component.html',
  styleUrls: ['./post-stats.component.css']
})
export class PostStatsComponent implements OnInit {

  @Input() postDetails: any;

  isAlredayLiked: boolean;

  constructor(private api: ApiService,
              private socket: Socket
    ) {
      socket.on('like updated', (postAuthor) => {
        alert('Someone Liked your post!');
        location.reload();
      });
     }

  ngOnInit(): void {
    if (this.postDetails.likes.indexOf(localStorage.getItem('email')) === -1){
      this.isAlredayLiked = false;
    }else{
      this.isAlredayLiked = true;
    }
  }

  updateLike(): void{

    const payload = {
      email: localStorage.getItem('email'),
      _id: this.postDetails._id
    };

    const emailIndex = this.postDetails.likes.indexOf(localStorage.getItem('email'));
    if (emailIndex === -1){
      this.api.post('make-like', payload)
      .subscribe( resp => {
        if ( resp === '1'){
          this.socket.emit('like updated', this.postDetails.email);
          this.postDetails.likes.push(localStorage.getItem('email'));
          this.isAlredayLiked = true;
        }
      });
    }else {
      this.api.post('make-dislike', payload)
      .subscribe( resp => {
        if (resp === '1'){
          this.socket.emit('like updated', this.postDetails.email);
          this.postDetails.likes.splice(emailIndex, 1);
          this.isAlredayLiked = false;
        }
      });
    }

    location.reload();
  }

}
