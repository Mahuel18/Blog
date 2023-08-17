import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

  export class LoginComponent {
    username: string = '';
    password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', response.data.username);
        this.router.navigate(['/landing']).then(()=>{
          window.location.reload();
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onRegister(){
    this.router.navigate(['/register']);
  }

  onLogout() {
    this.authService.logout().subscribe(
      () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
      },
      (error) => {
        console.error(error);
      }
    );
  }
  }