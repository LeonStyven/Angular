import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : [];
};

//Dependency Injection (DI)
// Funciona como un singleton, es decir, Angular crea una instancia de la clase y la reutiliza en
// toda la aplicación.

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorange = effect(() => {
    /* console.log(`Character count ${this.characters().length}`); */

    //Se envia el contenido al Local Storage para su persistencia
    localStorage.setItem('chatacters', JSON.stringify(this.characters()));
  });

  //Se recibe la info desde el componente hijo y se concatena el nuevo personaje
  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }
}
