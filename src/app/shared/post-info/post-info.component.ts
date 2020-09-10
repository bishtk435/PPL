import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {

  @Input() whosePost: string;
  @Input() postDate: string;

  constructor() { }

  ngOnInit(): void {
  }

}
