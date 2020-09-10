import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  isLoggedInFailed = false;

  formData = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
  }

}
