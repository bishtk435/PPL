import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postDetails: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPostDetails(): void{
    localStorage.setItem('currentPost', JSON.stringify(this.postDetails));
    this.router.navigate(['/post', this.postDetails._id]);
  }

}
