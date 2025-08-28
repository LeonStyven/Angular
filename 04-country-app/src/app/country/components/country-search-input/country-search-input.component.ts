import { ChangeDetectionStrategy, Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  standalone: true,
  imports: [],
  templateUrl: './country-search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountrySearchInputComponent {

  placeholder = input('Buscar');
  searchInput = output<string>();
  debounceTime = input(500);


  inputValue = signal<string>('');

  devounceEffect = effect((onClueanUp) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.searchInput.emit(value)
    }, this.debounceTime());

    onClueanUp(() => {
      clearTimeout(timeout)
    })

  })
  
}
