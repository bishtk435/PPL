import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPasswordService } from '../reset-password/reset-password.service';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  isPasswordMatch = true;

  formData = {
    password: '',
    password2: ''
  };

  constructor(
    private api: ApiService,
    private resetPasswordService: ResetPasswordService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.isPasswordMatch = this.resetPasswordService.formValidation(this.formData);
    if (this.isPasswordMatch === false){
      return;
    }

    const requestData = {
      email: localStorage.getItem('email-reset  '),
      password: this.formData.password
   };

    this.api.post('user/reset', requestData)
    .subscribe( resp => {
      if (resp === '1'){
        alert('Password changed successfully!');
        localStorage.removeItem('email-reset');
        this.router.navigate(['/login']);
      }
    });
  }

}
