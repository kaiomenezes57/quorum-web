import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PollModel, PollService } from '../../services/poll/poll-service';

@Component({
  selector: 'app-poll',
  imports: [CommonModule],
  templateUrl: './poll.html',
  styleUrl: './poll.css',
})
export class Poll implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly service = inject(PollService);
  private readonly changeDetector = inject(ChangeDetectorRef)

  poll?: PollModel;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id)
      return;
    
    this.service.getById(id).subscribe(response => {
      this.poll = response;

      // TODO: Find out why the template only works with that line.
      this.changeDetector.detectChanges();
    });
  };
}