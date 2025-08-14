import { Component, inject, input } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {


  countryService = inject(CountryService);

  capitalSearchValue = input.required<string>();

  onSearch(query: string){
    this.countryService.searchByCapital(query)
    .subscribe( resp => {
      console.log(resp);
    })
    
  }

}
