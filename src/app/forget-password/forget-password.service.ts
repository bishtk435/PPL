import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ForgetPasswordService {
    constructor(private http: HttpClient){}

    formValidation(formData): boolean{
        for (const i in formData){
            if (formData[i] === ''){
                return false;
            }
        }
        return true;
    }

}

