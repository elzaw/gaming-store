import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.baseURL}/users`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl);
  }

  getUserById(userId: number): Observable<IUser> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<IUser>(url);
  }

  addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl, user);
  }

  updateUser(user: IUser): Observable<IUser> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<IUser>(url, user);
  }

  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete(url);
  }
}
