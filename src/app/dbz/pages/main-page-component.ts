import { Component } from '@angular/core';
import { DbzService } from '../service/dbz.service';
import { Character } from '../interface/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html',
})
export class MainPageComponent {
  //constructor de DbzService para poder acceder a los metodos de la clase
  constructor(private DbzService: DbzService) {}

  get character(): Character[] {
    return [...this.DbzService.character];
  }

  //Viene del Componente hijo add-character
  onNewCharacter(character: Character): void {
    this.DbzService.addCharacter(character);
  }
  //Viene del Componente hijo list
  onDeleteCharacter(id: string): void {
    this.DbzService.onDeleteCharacterById(id);
  }
}
