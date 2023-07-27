import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private jwtHelper: JwtHelperService;

  constructor() {
    this.token = '';
    this.jwtHelper = new JwtHelperService();
  }

  setToken(token: string): void {
    this.token = token;
  }

  isAuthenticated(): boolean {
    return this.token !== null && !this.jwtHelper.isTokenExpired(this.token);
  }
}