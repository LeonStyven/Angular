import { Component, inject, input, resource } from '@angular/core';
import { CountryService } from '../../../services/country.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { NotFoundComponent } from '../../../../shared/components/not-found/not-found.component';
import { Country } from '../../../interfaces/country.interface';

@Component({
  selector: 'country-information',
  imports: [RouterLink, DecimalPipe, NotFoundComponent],
  templateUrl: './country-information.component.html',
})
export class CountryInformationComponent {

  country = input.required<Country>();

}
