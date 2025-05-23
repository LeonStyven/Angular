import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from '../../components/top-menu/top-menu.component';

@Component({
  selector: 'app-country-layout-page',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './CountryLayoutPage.component.html',
})
export class CountryLayoutPageComponent { }
