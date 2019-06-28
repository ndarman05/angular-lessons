import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    'John',
    'Dan',
    'Sam'
  ];

  user = new BehaviorSubject<string>('User');
  getUser = this.user.asObservable();

  editUser(newUser){
    this.user.next(newUser);
  }

  getUsers(){
    return this.users;
  }

  constructor() { }
}
