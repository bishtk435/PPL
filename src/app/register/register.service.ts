import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RegisterService{
    constructor(private http: HttpClient){}

    registerRequest(data){
        console.log('This is the data we are receiving in the service', data);
        return this.http.post('http://localhost:5000/user/signupform', data, { responseType: 'text'});
    }

    validateFormData(formData){
        console.log('this is form data in validate service: ', formData);
        for(let i in formData){
          if(formData[i] === ''){
            return false;
          }
        }
        return true;
    }
}