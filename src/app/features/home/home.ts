import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../shared/components/button/button";
import { Input } from "../../shared/components/input/input";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, Input],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly router = inject(Router);
  private pollId = '';

  setValue(value: string): void {
    this.pollId = value;
  }

  createNewPoll(): void {
    this.router.navigate(['/poll/new']);
  }

  findPoll(): void {
    if (!this.pollId.trim()){
      alert('Please enter a valid poll ID');
      return;
    }

    this.router.navigate(['/poll', this.pollId]);
  }
}
