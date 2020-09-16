import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loggedIn, loggedOut } from '../app.actions';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData = {
    email: '',
    password: ''
  };

  isError = false;

  error = '';

  constructor(private loginService: LoginService,
              private api: ApiService,
              private router: Router, private store: Store<{isLoggedIn: number}>
    ) { }

  ngOnInit(): void {
    if (localStorage.getItem('email') !== null){
      this.router.navigate(['/home-page']);
    }
  }

  onSubmit(): void{
    if (!this.loginService.formValidation(this.formData)){
      alert('Please type both email and password!');
      return;
    }

    this.api.post('user/loginform', this.formData)
    .subscribe( res => {
      if (res === '1'){
        localStorage.setItem('email', this.formData.email);

        this.store.dispatch(loggedIn());

        this.router.navigate(['/home-page']);
      }else{
        this.isError = true;
        if (res === '-1'){
          this.error = 'Email is not registered!';
        }else {
          this.error = 'Incorrect Password';
        }
      }
    }, error => {
      console.log('oops', error);
      this.isError = true;
      this.error = error.name + ': ' + error.statusText;
    });
  }
}
