import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [

  {
    path: '',
    component: HomePageComponent,
  },

  {
    path: 'country',
    loadChildren: () => import('./country/country.routes'), //.then(m => m.countryRoutes) //Trae los hijos en lugar de asignarlos directamente para evitar conflictos con el equipo
  },

  {
    path: '**',
    redirectTo: '',
  }


];
