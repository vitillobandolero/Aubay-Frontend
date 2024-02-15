import { Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'heroes', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroes/create', component: HeroFormComponent },
    { path: 'heroes/edit/:id', component: HeroFormComponent },
];
