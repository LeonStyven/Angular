import { Component } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
})
export class CounterPageComponent {
  counter = 10;

  increaseBy(value: number) {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
