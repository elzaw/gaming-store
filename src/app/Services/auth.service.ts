import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);


  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    const token = '10081997';
    localStorage.setItem('userToken', token);
    // For simplicity, let's assume any non-empty username and password are valid.
    const isValid = username.trim() !== '' && password.trim() !== '';

    if (isValid) {
      this.loggedIn.next(true);
    }

    return new Observable((observer) => {
      observer.next(isValid);
      observer.complete();
    });
  }

  logout() {
    localStorage.removeItem('userToken');
    this.loggedIn.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
