import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

export interface PollModel {
    id: string;
    userId: string;
    name: string;
    description: string;
    voteGoal: number;
    voteCount: number;
    createdAt: string;
    lastUpdatedAt: string;
    options: OptionModel[];
}

export interface OptionModel {
    id: string;
    name: string;
}

@Service()
export class PollService {
    private readonly httpClient = inject(HttpClient);

    getById(id: string): Observable<PollModel> {
        return this.httpClient.get<PollModel>(`http://localhost:8080/api/polls/${id}`);
    }
}
