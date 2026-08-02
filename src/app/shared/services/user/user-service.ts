import { Service } from '@angular/core';

interface UserModel {
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

        // Bypassing the check for refreshToken as it can be empty or whitespace.

        this.user = user;
    }

    getToken(): string {
        if (!this.user.token.trim()) {
            console.warn('Token is not set. Please set the token before making requests.');
            return '';
        }

        return this.user.token;
    }

    // Additional methods for refreshToken can be added here if needed.
}
