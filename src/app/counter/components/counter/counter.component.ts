import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:`
    <h3>counter: {{counter}}</h3>

    <button  (click)="decreasiBY()">-1</button>
    <button (click)="increaseBY()">+1</button>
    <button (click)="reset()">reset</button>

  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBY(): void {
    this.counter += 1;
  }

  decreasiBY(): void {
    this.counter -= 1;
  }

  reset(): void {
    this.counter = 10;
  }
}
