import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'issues',
        loadComponent: () => import('./features/issue/issue.component').then(m => m.IssueComponent)
    },
    {
        path: 'settings',
        loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent)
    },
    {
        path: 'identity',
        loadChildren: () => import('./features/identity/identity.routes').then(m => m.identityRoutes)
    },
    {
        path: '',
        redirectTo: 'issues',
        pathMatch: 'full'
    }
];
