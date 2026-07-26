import { Service } from '@angular/core';

@Service()
export class ApiService {
    readonly baseUrl = 'http://localhost:8080/api';
}
