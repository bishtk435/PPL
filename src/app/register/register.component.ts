import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerService.registerRequest()
    .subscribe( res => {
      console.log('This is we are getting from the server:', res);
    })
  }

  handleRegister(registerFormValues){
    console.log('This is we are getting in the handle register: ', registerFormValues);
  }

}
