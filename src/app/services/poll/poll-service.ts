import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api-service';

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
    private readonly api = inject(ApiService);

    getById(id: string): Observable<PollModel> {
        return this.httpClient.get<PollModel>(`${this.api.baseUrl}/polls/${id}`);
    }
}
