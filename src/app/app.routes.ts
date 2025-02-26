import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';

// adresse des routes à ajouter
export const routes: Routes = [
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];
