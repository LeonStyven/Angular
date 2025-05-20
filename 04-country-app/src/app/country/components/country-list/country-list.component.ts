import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  router = inject(Router);


  navigateTo(countryName: string){
    console.log(countryName);
    this.router.navigateByUrl(`country/${countryName}`)
  }
}
