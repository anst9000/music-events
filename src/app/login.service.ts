import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: BehaviorSubject<User> = new BehaviorSubject(undefined);

  constructor() {}

  LogIn(username: string, password: string) {
    if (username && password) {
      this.user.next(new User(username, password));
    }
  }

  LogOut() {
    this.user.next(undefined);
  }

  GetUser(): Observable<User> {
    return this.user;
  }
}
