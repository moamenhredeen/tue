import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'issues',
        loadComponent: () => import('./features/issue/issue.component').then(m => m.IssueComponent)
    },
    {
        path: '',
        redirectTo: 'issues',
        pathMatch: 'full'
    }
];
