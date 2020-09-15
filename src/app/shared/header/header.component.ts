import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isLoogedIn } from 'src/app/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //  isLoggedIn$: Observable<boolean>;

  loggedIn = null;

  constructor(private store: Store<{LoggedIn: boolean}>, private router: Router) {
  //  this.isLoggedIn$ = store.pipe(select('LoggedIn'));
   }

  ngOnInit(): void {
    this.loggedIn = localStorage.getItem('email');
  }

  ngDoCheck(): void {
    this.loggedIn = localStorage.getItem('email');
  }

  goToHome(): void{
    this.router.navigate(['/home-page']);
  }
}
