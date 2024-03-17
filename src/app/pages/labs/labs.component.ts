import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio',
  ];
  name = 'Miguel Angel';
  age = 39;
  disable = true;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Miguel Angel',
    age: 39,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'

  }
  clickhandler() {
    alert('Hola')
  }

  changeHandler(event: Event) {
    console.log(event);
  }
  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);

  }
}


