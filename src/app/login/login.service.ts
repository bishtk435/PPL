import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(){}

    formValidation(formData): boolean{
        for (const i in formData){
            if (formData[i] === ''){
                return false;
            }
        }
        return true;
    }
}

