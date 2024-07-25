import { Component, signal } from '@angular/core';
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
  tasks = signal([
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio',
  ]);
  name = signal('Miguel Angel');
  age = 39;
  disable = true;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  person = signal({
    name: 'julianasas',
    age: 5,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'

  });
  clickhandler() {
    alert('Hola')
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newvalue = input.value;
    this.name.set(newvalue);
  }
  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);

  }
  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newvalue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        age: parseInt(newvalue, 10)
      }
    });
  }
  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newvalue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        name: newvalue
      }
    });
  }
}


