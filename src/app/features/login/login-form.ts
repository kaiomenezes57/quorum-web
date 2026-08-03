import { Component, inject } from '@angular/core';
import { LoginService } from './services/login-service';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button';
import { Input } from "../../shared/components/input/input";

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, ButtonComponent, Input],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  private readonly loginService = inject(LoginService);

  email = '';
  password = '';
  isLoading = false;

  setEmail(value: string): void {
    this.email = value;
  }
  
  setPassword(value: string): void {
    this.password = value;
  }

  onSubmit(): void {
    if (!this.email.trim() || !this.password.trim()) {
      console.error('Email and password cannot be empty or whitespace.');
      return;
    }

    this.isLoading = true;

    const payload = {
      email: this.email,
      password: this.password,
    };

    this.loginService.login(payload)
      .then(() => {
        this.isLoading = false;
        console.log('Login successful');
      })
      .catch((error) => {
        this.isLoading = false;
        console.error('Login failed:', error);
      });
  }
}
