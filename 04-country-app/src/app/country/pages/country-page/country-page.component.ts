import { CountryService } from './../../services/country.service';
import { Component, inject, resource } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { NotFoundComponent } from "../../../shared/components/not-found/not-found.component";
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-page',
  imports: [NotFoundComponent, DecimalPipe, RouterLink],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  countryService = inject(CountryService); // Inject the CountryService
  private router = inject(Router);

  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryResource = resource({

    params: () => ({countryCode: this.countryCode}),
    loader: async( {params} ) => {
      /* if */ // * Validar si el codigo existe

      const country = await firstValueFrom(
        this.countryService.searchCountryByAlphaCode(params.countryCode)
      )
      
      console.log('Country data from mapper:', country);
      return country;
    }
  })

}
