import { IdentityComponent } from "./identity.component";
import { Routes } from "@angular/router";

export const identityRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./identity.component').then(m => m.IdentityComponent)
    }
];