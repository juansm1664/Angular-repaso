import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  changeHeroName(): void {
    this.name = 'Spiderman';
  }

  changeHeroAge(): void {
    this.age = 30;
  }
  resetHero(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
