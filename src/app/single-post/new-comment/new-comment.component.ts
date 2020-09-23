import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  @Input() postDetails: any;

  comment = '';

  constructor(private api: ApiService,
              private socket: Socket
    ) {
      this.socket.on('new comment added', (postAuthor) => {
        console.log('this postauthor: ', postAuthor);
        console.log('this type of local storage', localStorage.getItem('email'));
        if (postAuthor === localStorage.getItem('email')){
          alert('Somebody added comment on your post');
          location.reload();
        }
      });
    }

  ngOnInit(): void {
  }

  onSubmitComment(): void {

    const payload = {
      _id: this.postDetails._id,
      email: localStorage.getItem('email'),
      comment: this.comment
    };

    this.api.post('post-comment', payload).subscribe( resp => {
      this.socket.emit('new comment added', this.postDetails.email);
      location.reload();
    });
  }

}
