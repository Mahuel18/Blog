import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    const userData = { username: this.username, password: this.password };
    this.authService.registerUser(userData).subscribe(
      (response) => {
        alert('Registro exitoso. Inicia sesión para continuar.');
        this.router.navigate(['/login']);
      },
      error => {
        alert(error.error.message || 'Error en el registro.');
      }
    );
  }
}
