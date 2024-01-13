import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated = new BehaviorSubject<boolean>(this.checkLogin());
  readonly isAuthenticated$ = this._isAuthenticated.asObservable();

  constructor() {}

  login() {
    localStorage.setItem('isAuth', 'true');
    this._isAuthenticated.next(true);
  }

  logout() {
    localStorage.removeItem('isAuth');
    this._isAuthenticated.next(false);
  }

  checkLogin(): boolean {
    return localStorage.getItem('isAuth') === 'true';
  }
}
