import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    //TODO: create Hero NAME changer
    this.name = 'Spiderman';
  }

  changeAge():void {
    //TODO: create Hero AGE changer
    this.age = 30;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }

}
