import { Injectable } from '@angular/core';
import { User } from '../models/user';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormGroup } from '@angular/forms';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};



@Injectable()
export class UserService {

  serverUrl = 'http://192.168.1.6:8000';

  constructor( private http: HttpClient, ) { }


  createUser(userData): Observable < any > {
    let phonenullcheck = '1';
    if ( userData.value.phone === '' ) {
      phonenullcheck = null;
    } else {
      phonenullcheck = userData.value.phone;
    }

    const body = {
      username: userData.value.username ,
      email: userData.value.email,
      password: userData.value.password,
      phone: phonenullcheck,
    };

    return this.http.post(this.serverUrl + '/api/users/', body, httpOptions);
  }

  login(userData): Observable<any> {
    return this.http.post(this.serverUrl + '/api/v2/auth/', userData, httpOptions);
  }

  setUserRole(userData, myRole): Observable<any> {
    const body = {
      user: userData.id,
      role: myRole,
      isActive: true,
    };
    return this.http.post(this.serverUrl + '/api/userrole/', body, httpOptions);
  }


}


