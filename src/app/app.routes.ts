import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { ContratosComponent } from './components/contratos/contratos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    { path: 'perfil', component: PerfilComponent },
    {
        path: 'contratos',
        component: ContratosComponent,
    },
    {
        path: 'home',
        component: HomeComponent
    }

];
