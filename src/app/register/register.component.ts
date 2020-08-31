import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 model = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: ''
  }
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  
  }

  handleRegister(){
    this.registerService.registerRequest(this.model)
    .subscribe( res => {
      console.log('This is we are getting from the server:', res);
      if(res === '1'){
        alert('Successfully Registered!');
        this.router.navigate(['/login']);
      }else{    
        alert('Email alreday exists!');
      }
    })
  }

}
