import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import { DashboardComponent } from '../app/pages/dashboard/dashboard.component';
import { UsersComponent } from '../app/pages/users/users.component';
import { SettingsComponent } from '../app/pages/settings/settings.component';
import { UsersDetailsComponent } from '../app/pages/users/users-details/users-details.component';
// adresse des routes à ajouter
export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full',
    },
    {
        path: 'users',
        component: UsersComponent,
        pathMatch: 'full',
    },
    {
        path: 'users/details',
        component: UsersDetailsComponent,
        pathMatch: 'full',
    },
    {
        path: 'settings',
        component: SettingsComponent,
        pathMatch: 'full',
    },
    {
        path: '**', // les ** permettent de gérer les routes non définiese et de les rediriger vers la page 404
        component: PageNotFoundComponent,
        pathMatch: 'full',
    },
];
