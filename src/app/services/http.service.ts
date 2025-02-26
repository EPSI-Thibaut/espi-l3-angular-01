import { HttpClient } from '@angular/common/http';
import {inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private client : HttpClient = inject(HttpClient)

  constructor() { }

  public getUsers(): Observable<any>
  {
    return this.client.get('https://jsonplaceholder.typicode.com/users')
  }
}
