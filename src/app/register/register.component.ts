import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isError = false;
  error = '';

  formData = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    terms: false
  };
  constructor(
    private api: ApiService,
    private registerService: RegisterService,
    private router: Router){ }

  ngOnInit(): void {}

  handleRegister(formValues): void{

    if ( !this.registerService.validateFormData(this.formData) ){
      this.isError = true;
      this.error = 'All fields required!';
      return;
    }else{
      if (this.formData.terms !== true){
        this.isError = true;
        this.error = 'Please accept Terms & Conditions!';
        return;
      }
    }

    this.api.post('user/register', this.formData)
    .subscribe( res => {
      if (res === '1'){
        alert('Successfully Registered!');
        this.router.navigate(['/login']);
      }else{
        this.isError = true;
        this.error = 'Email already exists!';
      }
    });
  }
}
