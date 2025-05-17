import { Routes } from "@angular/router";
import { CountryLayoutPageComponent } from './layouts/CountryLayoutPage/CountryLayoutPage.component';
import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital-page.component";



export const countryRoutes: Routes = [

  {
    path: '',
    component:  CountryLayoutPageComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      }
    ]
  },

  /* {
    path: 'country',
    // ??? {}
  },
 */
  /* {
    path: '**',
    redirectTo: '',
  } */


];


export default countryRoutes