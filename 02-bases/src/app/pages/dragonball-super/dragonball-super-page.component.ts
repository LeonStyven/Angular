import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonballService } from '../../services/dragonball.service';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [
    CharacterListComponent,
    CharacterListComponent,
    CharacterAddComponent,
  ],
})
export class DragonballSuperPageComponent {

  public dragonballService = inject(DragonballService);

  //INJECCION TRADICIONAL
 /*  constructor(
    public dragonballService: DragonballService
  ) {}
  */
}
