import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { serverAddress } from './server-address';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  post(route: string, payload: object): any{
    return this.http.post(serverAddress + route, payload, {responseType: 'text'});
  }

  getWithParams(route: string, payload: any): any{
    const param = new HttpParams().set('_id', payload.id);
    return this.http.get(serverAddress + route, {params: param, responseType: 'text'});
  }

  getUserDetails(route: string, payload: any): any{
    const param = new HttpParams().set('email', payload.email);
    return this.http.get(serverAddress + route, {params: param, responseType: 'text'});
  }

  getMyPosts(route: string, payload: any): any{
    const param = new HttpParams().set('email', payload.email);
    return this.http.get(serverAddress + route, {params: param, responseType: 'text'});
  }

  getWithoutParams(route: string): any{
    return this.http.get(serverAddress + route, {responseType: 'json'});
  }

  authorizateUser(token: any): any{
    console.log("this is token", token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
         Authorization: token
      }),
      responseType: 'text'
    };
    return this.http.get(serverAddress + 'authorizate-user', httpOptions);
  }
}
