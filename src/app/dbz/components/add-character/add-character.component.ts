import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  // Output es un decorador que nos permite emitir eventos del componente hijo al componente padre
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); // Evento que se va a emitir

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    this.character.name = '';
    this.character.power = 0;
  }
}
