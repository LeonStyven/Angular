import { Component, Output, EventEmitter, output} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {

  @Output() newSearch = new EventEmitter<string>();

  NewCountrySearch(value: string){
    this.newSearch.emit(value);
  }

}
