
import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

//Dependency Injection (DI)
// Funciona como un singleton, es decir, Angular crea una instancia de la clase y la reutiliza en 
// toda la aplicación.

@Injectable({ providedIn: 'root'})
export class DragonballService {

    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 9001 },
        { id: 2, name: 'Vegeta', power: 8000 },
      ]);
    
      //Se recibe la info desde el componente hijoy se concatena el nuevo personaje
      addCharacter(newCharacter: Character) {
        this.characters.update((list) => [...list, newCharacter]);
      }    
    
}

