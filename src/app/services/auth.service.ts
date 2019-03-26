import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'tokenbf0d63523bdc926d23c33bb4d27e9a635cbc9698'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverUrl = 'http://192.168.1.6:8000';

  constructor(private http: HttpClient, ) {
  }


  login(): Observable<any> {
    return  this.http.get(this.serverUrl + '/api/users/', httpOptions);
  }

}
