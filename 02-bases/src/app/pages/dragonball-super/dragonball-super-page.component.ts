import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';

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
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });

  //Se recibe la info desde el componente hijoy se concatena el nuevo personaje
  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
