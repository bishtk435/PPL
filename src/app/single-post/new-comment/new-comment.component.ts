import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  @Input() postDetails: any;

  comment = '';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  onSubmitComment(): void {

    const payload = {
      _id: this.postDetails._id,
      email: localStorage.getItem('email'),
      comment: this.comment
    };

    this.api.post('post-comment', payload).subscribe( resp => {
      location.reload();
    });
  }

}
