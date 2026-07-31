import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-poll-create',
  imports: [RouterLink, FormsModule],
  templateUrl: './poll-create.html',
  styleUrl: './poll-create.css',
})
export class PollCreate {
  pollName = '';
  pollDescription = '';
  voteGoal = 0;
  
  options: string[] = [];
  newOptionName = '';

  addOption(): void {
    const trimmed = this.newOptionName.trim();
    
    if (!trimmed || this.options.includes(trimmed))
      return;

    this.options.push(trimmed);
    this.newOptionName = '';
  }

  removeOption(index: number): void {
    this.options.splice(index, 1);
  }

  submit(): void {
    if (!this.pollName.trim()) {
      alert('Please provide a poll name.');
      return;
    }

    if (this.options.length < 2) {
      alert('A poll must have at least 2 options.');
      return;
    }

    const payload = {
      name: this.pollName,
      description: this.pollDescription,
      voteGoal: this.voteGoal,
      options: this.options.map((name) => ({ name }))
    };

    console.log('Sending payload:', payload);
    // TODO: Chamar o PollService aqui enviando o payload para a API
  }
}
