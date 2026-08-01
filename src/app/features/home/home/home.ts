import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button";

@Component({
  selector: 'app-home',
  imports: [ButtonComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  onSubmit(): void {
    console.log('Botão clicado!');
  }
}
