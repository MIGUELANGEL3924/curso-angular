import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from './../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  task2 = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false

    },
    {
      id: Date.now(),
      title: 'Crear componentes',
      completed: false

    },
  ]);

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);

  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.task2.update((task2) => [...task2, newTask]);
  }

  deleteTask(index: number) {
    this.task2.update((task2) => task2.filter((task2, position) => position !== index));

  }

  updateTask(index: number) {
    this.task2.update((tasks2) => {
      return tasks2.map((tasks2, position) => {
        if (position === index) {
          return {
            ...tasks2,
            completed: !tasks2.completed
          }
        }
        return tasks2;
      })
    })

  }
}
