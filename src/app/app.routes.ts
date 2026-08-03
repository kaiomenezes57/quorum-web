import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { LoginForm } from './features/login/login-form';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: LoginForm }
];