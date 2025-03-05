import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },

  {
    path: 'dragonball',
    component: DragonballPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
