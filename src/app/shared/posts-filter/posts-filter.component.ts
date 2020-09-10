import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-filter',
  templateUrl: './posts-filter.component.html',
  styleUrls: ['./posts-filter.component.css']
})
export class PostsFilterComponent implements OnInit {

  postsFilters = [
    {filterIcon: './assets/images/img_1.png', filterName: 'Latest First'},
    {filterIcon: './assets/images/img_2.png', filterName: 'Oldest First'},
    {filterIcon: './assets/images/img_3.png', filterName: 'Most Pet'},
    {filterIcon: './assets/images/img_4.png', filterName: 'Most Click'},
    {filterIcon: './assets/images/img_5.png', filterName: 'Most Commented'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
