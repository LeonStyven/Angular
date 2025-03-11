import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // HashStrategy
    //Cuando no se puede hacer modificacion de rutas en el server

    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
};
