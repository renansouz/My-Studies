import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todoForm: FormGroup;
  tasks: string[] = [];
  draggingIndex: number | null = null; // Store the index of the dragged item

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      task: this.fb.control<string>('', { nonNullable: true }), // Ensure FormControl<string>
    });
  }

  // Getter for form control (Best Practice)
  get taskControl(): FormControl<string> {
    return this.todoForm.get('task') as FormControl<string>;
  }

  addTask() {
    const taskValue = this.taskControl.value;
    if (taskValue && taskValue.trim()) {
      this.tasks.push(taskValue.trim());
      this.todoForm.reset();
    }
  }

  onDragStart(event: DragEvent, index: number) {
    if (event.dataTransfer) {
      event.dataTransfer.setData('text/plain', this.tasks[index]);
      event.dataTransfer.effectAllowed = 'move';
      this.draggingIndex = index;
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      const droppedTask = event.dataTransfer.getData('text/plain');
      if (droppedTask && !this.tasks.includes(droppedTask)) {
        this.tasks.push(droppedTask);
      }
    }
    this.draggingIndex = null;
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  onDragEnd() {
    // Remove the item if dragged outside the window
    if (this.draggingIndex !== null) {
      this.tasks.splice(this.draggingIndex, 1);
    }
    this.draggingIndex = null;
  }
}
