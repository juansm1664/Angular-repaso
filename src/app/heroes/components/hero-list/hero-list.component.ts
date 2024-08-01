import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent {

  public heroeNames: string[] =[
    'Superman',
    'Hulk',
    'Linterna Verde',
    'Gabito',
    'Storm'
  ]
  public deleteHeroe?: string;

  removeLastHeroe(): void {
     const deleteHeroe = this.heroeNames.pop(); // Elimina el último elemento del array
  }

}
