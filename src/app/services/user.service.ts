import { Injectable } from '@angular/core';
import { User } from '../modals/user';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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
