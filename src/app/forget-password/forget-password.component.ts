import { Component, OnInit } from '@angular/core';
import { ForgetPasswordService } from './forget-password.service';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  isIncorrectEmail = false;

  isEmailSent = false;

  formData = {
    email: ''
  };

  constructor(
    private api: ApiService,
    private forgetPasswordService: ForgetPasswordService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): any{
    this.api.post('user/forgot-password', this.formData)
    .subscribe( resp => {
      if ( resp === '1'){
        this.isEmailSent = true;
        localStorage.setItem('email', this.formData.email);
        // this.router.navigate(['/login']);
      }else{
        this.isIncorrectEmail = true;
      }
    });
  }
}
