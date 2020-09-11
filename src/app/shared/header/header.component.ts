import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  // isLoggedIn = false;

  constructor(private store: Store<{LoggedIn: boolean}>, private router: Router) {
    this.isLoggedIn$ = store.pipe(select('LoggedIn'));
   }

  ngOnInit(): void {
  }



  goToHome(): void{
    this.router.navigate(['/home-page']);
  }
}
