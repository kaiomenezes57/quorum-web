import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Poll } from './components/poll/poll';
import { About } from './components/about/about';
import { NotFound } from './components/not-found/not-found';
import { PollCreate } from './components/poll-create/poll-create';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "home", component: Home },
    { path: "polls/create", component: PollCreate },
    { path: "polls/:id", component: Poll },
    { path: "about", component: About },
    { path: '**', component: NotFound }
];