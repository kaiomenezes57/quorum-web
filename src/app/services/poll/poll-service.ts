import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    private readonly apiService = inject(ApiService);
    token = '';

    post(payload: any): Observable<any> {
        const url = `${this.apiService.baseUrl}/polls`;

        // 1. Instância e define os headers desejados
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
        });

        return this.httpClient.post<any>(url, payload, { headers });
    }

    getById(id: string): Observable<PollModel> {
        const url = `${this.apiService.baseUrl}/polls/${id}`
        return this.httpClient.get<PollModel>(url);
    }
}
