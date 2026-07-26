import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly router = inject(Router)
  pollId = '';

  findPoll() {
    if (!this.pollId.trim())  
      return;
    
    this.router.navigate(['/polls', this.pollId.trim()])
  }
}
