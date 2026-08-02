import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./shared/components/button/button";
import { UserService } from './shared/services/user/user-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly userService = inject(UserService);
  protected readonly title = signal('quorum-web');

  userIsLoggedIn(): boolean {
    const token = this.userService.getToken();
    return token.trim() !== '';
  }
}
