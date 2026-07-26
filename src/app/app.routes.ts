import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Poll } from './components/poll/poll';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "home",
        component: Home
    },
    {
        path: "polls/:id",
        component: Poll
    }
];
