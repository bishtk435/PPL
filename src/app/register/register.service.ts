import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RegisterService{
    constructor(private http: HttpClient){}

    registerRequest(){
        return this.http.post('http://localhost:5000/user/signupform', {firstName: 'Kamal', lastName: 'Bisht', age: 23}, { responseType: 'text'});
    }
}