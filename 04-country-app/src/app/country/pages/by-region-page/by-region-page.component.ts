import { Component, inject, resource, signal } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import type { Region } from '../../interfaces/region.type';
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';
import { RegionSelectorComponent } from "../../components/region-selector/region-selector.component";

@Component({
  selector: 'app-by-region-page',
  imports: [CountryListComponent, RegionSelectorComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {

  countryService = inject(CountryService);
  query = signal('');

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  countryResource = resource({

    params: () => ({query: this.query()}),
    loader: async( {params} ) => {
      if(!params.query) return [];

      return await firstValueFrom(
        this.countryService.searchCountriesByRegion(params.query)
      )
    }

  })


}
