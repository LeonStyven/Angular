import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './country/pages/by-capital-page/by-capital-page.component';

export const routes: Routes = [

  {
    path: '',
    component: ByCapitalPageComponent,
  },

  {
    path: 'country',
    loadChildren: () => import('./country/country.routes'), //.then(m => m.countryRoutes)
  },

  {
    path: '**',
    redirectTo: '',
  }


];
