import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ResetPasswordService {
    constructor() {}

    formValidation(formData): boolean{
        if ( formData.password !== formData.password2){
            return false;
        }else {
            return true;
        }
    }
}
