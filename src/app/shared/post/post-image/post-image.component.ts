import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.css']
})
export class PostImageComponent implements OnInit {
  @Input() postDetails: any;

  constructor() { }

  ngOnInit(): void {
  }

}
