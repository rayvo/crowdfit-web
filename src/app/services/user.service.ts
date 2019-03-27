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
    // Get /api/login last feature (change, last feature will be sent to me through /api/v2/auth/)
    // When i logout send last feature
    // when routing update localStorage's last feature
  }

  getSingleUser(userId): Observable<any> {
    return this.http.get(this.serverUrl + '/api/users/' + userId, httpOptions);
  }

  setUserRole(userId, userRole): Observable<any> {
    const body = {
      user: userId,
      role: userRole,
      isActive: true,
    };
    return this.http.post(this.serverUrl + '/api/userrole/', body, httpOptions);
  }

  setUserStatusWait(userId): Observable<any> {
    const body = {
      user: userId,
      status: 1,
      isActive: true,
    };
    return this.http.post(this.serverUrl + '/api/userstatus/', body, httpOptions);
  }

  setUserStatusApproved(userId): Observable<any> {
    const body = {
      user: userId,
      status: 2,
      isActive: true,
    };
    return this.http.put(this.serverUrl + '/api/userstatus/', body, httpOptions);
  }

  setUserStatusEvicted(userId): Observable<any> {
    const body = {
      user: userId,
      status: 3,
      isActive: false,
    };
    return this.http.put(this.serverUrl + '/api/userstatus/', body, httpOptions);
  }

}


