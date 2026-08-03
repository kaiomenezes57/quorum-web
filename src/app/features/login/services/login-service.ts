import { Service, inject } from '@angular/core';
import { ApiService } from '../../../shared/services/api/api-service';
import { UserService } from '../../../shared/services/user/user-service';

export interface LoginResponse {
    userId: string;
    token: string;
}

@Service()
export class LoginService {
    private readonly apiService = inject(ApiService);
    private readonly userService = inject(UserService);

    async login(payload: any): Promise<void> {
        const response = await this.apiService.post('/auth/login', payload);
        const { token, userId } = response as LoginResponse;

        if (!token) {
            throw new Error('Invalid response from server: Missing token or refreshToken.');
        }

        this.userService.setUser({ token, "refreshToken": "" });
    };
}
