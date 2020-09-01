import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  
  }

  formData = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: ''
  }

  handleRegister(formValue){

    console.log('This is form values we are receiving: ',this.formData);
    if(!this.registerService.validateFormData(this.formData)){
      alert('All fields required!');
      return;
    }else{
      if(formValue.terms!= true){
        alert('Please accept Terms & Conditions!');
        return;
      }
    }

    console.log('This is inside the formValue:', formValue);
    
    
    this.registerService.registerRequest(this.formData)
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
