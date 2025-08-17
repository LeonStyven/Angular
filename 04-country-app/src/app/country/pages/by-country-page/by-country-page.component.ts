import { Component, inject, input, resource, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  countryService = inject(CountryService); // Inject the CountryService
  query = signal(''); // Create a signal to store the search query


  //This is when we start this >:c
  countryResource = resource({

    params: () => ({query: this.query()}), //query de busqueda
    loader: async( {params} ) => { //recibe the params and return a PROMISE
      if( !params.query ) return[]; // if not query, return empty array
      
      return await firstValueFrom( //Convert the observable to a promise
        this.countryService.searchByCountry(params.query) //makes the search
      )
    }
  })


}
