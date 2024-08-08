import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  // Input es un decorador que nos permite recibir datos del componente padre
  @Input()
  public characterList: Character[] = [
    {
      //inicio de la lista de personajes
      name: 'Trunks',
      power: 45,
    },
  ];

  // Output es un decorador que nos permite emitir eventos del componente hijo al componente padre
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter(); // Evento que se va a emitir

  //metodo para eliminar un personaje
  onDeleteCharacter(id?: string): void {
    if (!id) {
      return;
    }
    this.onDelete.emit(id);
  }
}
