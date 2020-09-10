import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inner-header-right',
  templateUrl: './inner-header-right.component.html',
  styleUrls: ['./inner-header-right.component.css']
})
export class InnerHeaderRightComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToTimeline(): void{
    this.router.navigate(['/timeline']);
  }

}
