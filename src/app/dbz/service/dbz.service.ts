import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interface/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  //Va hacia el componente hijo list
  public character: Character[] = [
    {
      id: uuid(),
      name: 'krilli',
      power: 956,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000,
    },
    {
      id: uuid(),
      name: 'GOKU',
      power: 10000,
    },
  ];

  //Viene del Componente hijo add-character
  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };

    //Agrega un nuevo personaje a la lista
    this.character.push(newCharacter);
  }
  //Viene del Componente hijo list
  onDeleteCharacterById(id: string): void {
    this.character = this.character.filter((character) => character.id !== id);
  }
}
