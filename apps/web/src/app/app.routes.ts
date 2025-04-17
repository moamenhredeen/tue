import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
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
        ]
    },
    {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: '',
        redirectTo: 'issues',
        pathMatch: 'full'
    }
];
