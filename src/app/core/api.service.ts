import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { serverAddress } from './server-address';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  post(route: string, payload: object): any{
    return this.http.post(serverAddress + route, payload, {responseType: 'text'});
  }

  get(route: string): any{
    return this.http.get(serverAddress + route, {responseType: 'text'});
  }
}
