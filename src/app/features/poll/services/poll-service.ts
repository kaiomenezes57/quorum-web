import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../shared/services/api/api-service';
import { UserService } from '../../../shared/services/user/user-service';
import { PollModel } from '../models/poll-model';

@Service()
export class PollService {
    private readonly httpClient = inject(HttpClient);
    private readonly apiService = inject(ApiService);
    private readonly userService = inject(UserService);

    post(payload: any): Observable<any> {
        const url = `${this.apiService.baseUrl}/polls`;
        const token = this.userService.getToken();
        
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });

        return this.httpClient.post<any>(url, payload, { headers });
    }

    getById(id: string): Observable<PollModel> {
        const url = `${this.apiService.baseUrl}/polls/${id}`
        return this.httpClient.get<PollModel>(url);
    }
}
