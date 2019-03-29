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
    const body = {
      email: userData.value.email,
      password: userData.value.password,
    };
    return this.http.post(this.serverUrl + '/api/v2/auth/', userData, httpOptions);
    // Get /api/login last feature (change, last feature will be sent to me through /api/v2/auth/)
    // When i logout send last feature
    // when routing update localStorage's last feature
  }

  getSingleUser(userId): Observable<any> {
    return this.http.get(this.serverUrl + '/api/users/' + userId, httpOptions);
  }

  createUserRole(userId, userRole): Observable<any> {
    const body = {
      user: userId,
      role: userRole,
      isActive: true,
    };
    return this.http.post(this.serverUrl + '/api/userrole/', body, httpOptions);
  }

  setUserRole(userId, userRole): Observable<any> {
    const body = {
      user: userId,
      role: userRole,
      isActive: true,
    };
    return this.http.put(this.serverUrl + '/api/userrole/', body, httpOptions);
  }


  // TODO : Ask what staff a user should get when it's first made
  // or no user status at all
  createUserStatusNone(userId): Observable<any> {
    const body = {
      user: userId,
      status: 1,
      staff: 30,
      isActive: true,
    };
    return this.http.post(this.serverUrl + '/api/userstatus/', body, httpOptions);
  }

  // TODO : For User Status Wait, Approved, and Evicted
  // For now just assume one user is staff.
  // We will have to initialize these things when we deploy the sytem later
  // FOr now a random user was createde as staff
  createUserStatusWait(userId): Observable<any> {
    const body = {
      user: userId,
      status: 2,
      staff: 30,
      isActive: true,
    };
    return this.http.post(this.serverUrl + '/api/userstatus/', body, httpOptions);
  }

  createUserStatusApproved(userId): Observable<any> {
    const body = {
      user: userId,
      status: 3,
      staff: 30,
      isActive: true,
    };
    return this.http.put(this.serverUrl + '/api/userstatus/', body, httpOptions);
  }

  createUserStatusEvicted(userId): Observable<any> {
    const body = {
      user: userId,
      status: 4,
      staff: 30,
      isActive: false,
    };
    return this.http.put(this.serverUrl + '/api/userstatus/', body, httpOptions);
  }

  createHouseholdOccupied( aptId, dong, num, status ): Observable<any> {
    const body = {
      apt: aptId,
      addDong: dong,
      houseNum: num,
      status: 0, // 0: Occupied, 1: available
    };
    return this.http.post(this.serverUrl + '/api/household/', body, httpOptions);
  }

  createHouseholdAvailable( aptId, dong, num, status ): Observable<any> {
    const body = {
      apt: aptId,
      addDong: dong,
      houseNum: num,
      status: 1, // 0: Occupied, 1: available
    };
    return this.http.post(this.serverUrl + '/api/household/', body, httpOptions);
  }

  setHouseholdOccupied( aptId, dong, num, status ): Observable<any> {
    const body = {
      apt: aptId,
      addDong: dong,
      houseNum: num,
      status: 0, // 0: Occupied, 1: available
    };
    return this.http.put(this.serverUrl + '/api/household/', body, httpOptions);
  }

  setHouseholdAvailable( aptId, dong, num, status ): Observable<any> {
    const body = {
      apt: aptId,
      addDong: dong,
      houseNum: num,
      status: 1, // 0: Occupied, 1: available
    };
    return this.http.put(this.serverUrl + '/api/household/', body, httpOptions);
  }

  // TODO : When taeyu is finished making the db function for this part
  // 1) Ask him what the URL is
  // 2) Ask him what the body should be like so that I can set it properly
  createUserHousehold( userId, hhId, isOwner ): Observable<any> {
    const body = {
      user: userId,
      household: hhId,
      isOwner: isOwner,
    };
    return this.http.post(this.serverUrl + '/api/TODO/', body, httpOptions);
  }

  setUserHousehold( userId, hhId, isOwner ): Observable<any> {
    const body = {
      user: userId,
      household: hhId,
      isOwner: isOwner,
    };
    return this.http.put(this.serverUrl + '/api/TODO/', body, httpOptions);
  }

  createRFP( rId, fId, pId ): Observable<any> {
    const body = {
      role: rId,
      feature: fId,
      permission: pId,
      isActive: true,
    };
    return this.http.post(this.serverUrl + '/api/rolefeaturepermission/', body, httpOptions);
  }

  setRFP( rId, fId, pId ): Observable<any> {
    const body = {
      role: rId,
      feature: fId,
      permission: pId,
      isActive: true,
    };
    return this.http.put(this.serverUrl + '/api/rolefeaturepermission/', body, httpOptions);
  }

  createUserExerInfo( userId, userHeight, userWeight ) {
    const body = {
      user: userId,
      height: userHeight,
      weight: userWeight,
    };
    return this.http.post(this.serverUrl + '/api/userexerinfo/', body, httpOptions);
  }

  setUserExerInfo( userId, userHeight, userWeight ) {
    const body = {
      user: userId,
      height: userHeight,
      weight: userWeight,
    };
    return this.http.put(this.serverUrl + '/api/userexerinfo/', body, httpOptions);
  }

}


