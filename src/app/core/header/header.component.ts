import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  loggedInUser: string | null = '';

  constructor(private loginService: AuthService, private router: Router) {}

  logout() {
    this.loginService.logout();
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.updateAuthenticationStatus();
  }

  private updateAuthenticationStatus() {
    this.loginService.checkAuthentication().subscribe(
      (response) => {
        this.isLoggedIn = response['authenticated'];
        if (this.isLoggedIn) {
          this.loggedInUser = localStorage.getItem('username');
        }
      },
      (error) => {
        console.error('Error checking authentication:', error);
      }
    );
  }
}