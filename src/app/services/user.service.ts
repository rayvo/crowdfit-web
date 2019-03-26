import { Injectable } from '@angular/core';
import { User } from '../models/user';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormGroup } from '@angular/forms';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': localStorage.getItem('token')
  })
};
const httpOptionsNoAuth = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Content-Type':  'application/x-www-form-urlencoded',
  })
};


@Injectable()
export class UserService {

  serverUrl = 'http://192.168.1.6:8000';

  constructor( private http: HttpClient, ) { }

  // registerUser(userData): Observable<any> {
  //   // return this.http.post('http://210.105.48.120:8000/api/users/', userData);
  //   return this.http.post(this.serverUrl + '/api/users/', userData, httpOptions);
  // }

  /*
  loginUser(userData): Observable<any> {
    // return this.http.post('http://210.105.48.120:8000/api/users/', userData);
    return this.http.post(this.serverUrl + '/api/auth/', userData);
  }
  */

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

    // return this.http.post(this.serverUrl + '/api/v2/auth/', userData, httpOptionsNoAuth);
  }

  login(userData): Observable<any> {
    return this.http.post(this.serverUrl + '/api/v2/auth/', userData, httpOptionsNoAuth);
  }



}


// getAllUsers(): Observable < any > {
//   return this.http.post(this.serverUrl + '/api/users/', httpOptions);
// }

// getOneUser(aUsername): Observable < any > {
//   return this.http.get(this.serverUrl + '/api/users/15/', httpOptions);
// }

/*
 * This was made by Taeyu and is outdated.
 *
 *
 *
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  private users: Observable<User[]>;
  private usersCollection: AngularFirestoreCollection<User>;
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
    this.usersCollection = db.collection<User>('users');
    this.users = this.usersCollection.snapshotChanges().pipe(
        map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return {id, ...data};
            });
        })
    );
}

  getUsers() {
    return this.users;
  }

  getUser(id) {
    return this.usersCollection.doc<User>(id).valueChanges();
  }

  updateUser(user: User, id: string) {
    return this.usersCollection.doc(id).update(user);
  }

  addUser(user: User) {
    return this.usersCollection.add(user);
  }

  removeUser(id) {
    return this.usersCollection.doc(id).delete();
  }
}
*/
