import { Service } from '@angular/core';

export interface UserModel {
    token: string;
    refreshToken: string;
}

@Service()
export class UserService {
    private user: UserModel = { token: '', refreshToken: '' };

    setUser(user: UserModel): void {
        if (!user.token.trim()) {
            throw new Error('Token cannot be empty or whitespace.');
        }

        // Bypassing refreshToken checkings as it can be empty or whitespace.

        this.user = user;
    }

    getToken(): string {
        if (!this.user.token.trim()) {
            console.warn('Token is not set. Please set the token before making requests.');
            return '';
        }

        return this.user.token;
    }

    getRefreshToken(): string {
        return this.user.refreshToken;
    }
}
