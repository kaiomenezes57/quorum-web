import { Component, input, output } from '@angular/core';

// Tipos para dar autocomplete e evitar erros
export type ButtonVariant = 'primary' | 'secondary' | 'danger';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class ButtonComponent {
  label = input<string>('Submit');
  disabled = input<boolean>(false);
  loading = input<boolean>(true);
  variant = input<ButtonVariant>('primary');

  clicked = output<MouseEvent>();

  handleClick(event: MouseEvent) {
    if (!this.disabled() && !this.loading()) {
      this.clicked.emit(event);
    }
  }
}