import { Component, inject, resource } from '@angular/core';
import { CountryInformationComponent } from "./country-information/country-information.component";
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { NotFoundComponent } from "../../../shared/components/not-found/not-found.component";

@Component({
  selector: 'app-country-page',
  imports: [CountryInformationComponent, NotFoundComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  countryService = inject(CountryService); // Inject the CountryService
  private route = inject(ActivatedRoute);

  countryCode = this.route.snapshot.params['code'];
  countryResource = resource({
    params: () => ({countryCode: this.route.snapshot.params['code']}),
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
