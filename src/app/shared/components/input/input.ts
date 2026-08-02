import { Component, input, output } from '@angular/core';

export type InputTypes = 'text' | 'email' | 'password' | 'search' | 'tel' | 'url';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  type = input<InputTypes>('text');
  placeHolder = input<string>('Enter text');
  
  value = output<string>();

  onChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.value.emit(inputElement.value);
  }
}
