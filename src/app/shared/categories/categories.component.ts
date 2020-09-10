import { Component, OnInit } from '@angular/core';
// import { CategoriesData } from './categoriesData';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

   categoriesData = [
    {icon: './assets/images/icon_01.png', categoryName: 'Cats'},
    {icon: './assets/images/icon_02.png', categoryName: 'Dogs'},
    {icon: './assets/images/icon_03.png', categoryName: 'Birds'},
    {icon: './assets/images/icon_04.png', categoryName: 'Rabbits'},
    {icon: './assets/images/icon_05.png', categoryName: 'Others'},
];

  ngOnInit(): void {
  }

}
