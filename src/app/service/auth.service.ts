import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { 
    this.checkAuthentication();
   }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token !== null; // Si hay un token, el usuario está autenticado
  }
   
  checkAuthentication(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(`${this.apiUrl}check-auth/`, httpOptions);
  }

  login(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}login/`;
    const body = { username: username, password };
    return this.http.post(url, body);
  }

  logout(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      })
    };
    const url = `${this.apiUrl}logout/`;
    return this.http.get(url, httpOptions);
  }
  
  registerUser(userData: any): Observable<any> {
    const url = `${this.apiUrl}register/`;
    return this.http.post(url, userData);
  }
}