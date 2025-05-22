import { Component, inject, input } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountryListComponent, SearchInputComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  CountryService = inject(CountryService);

  searchByCapital(query: string): void {
    console.log({query});

    this.CountryService.searchByCapital(query)
    .subscribe(countries => {
      console.log({countries});
    })
  }
}
