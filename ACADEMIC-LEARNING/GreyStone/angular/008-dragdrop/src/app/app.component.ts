import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styles: [
    `
      .example-container {
        width: 400px;
        max-width: 100%;
        margin: 0 25px 25px 0;
        display: inline-block;
        vertical-align: top;
      }

      .example-list {
        border: solid 1px #ccc;
        min-height: 60px;
        background: white;
        border-radius: 4px;
        overflow: hidden;
        display: block;
      }

      .example-box {
        padding: 20px 10px;
        border-bottom: solid 1px #ccc;
        color: rgba(0, 0, 0, 0.87);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        cursor: move;
        background: white;
        font-size: 14px;
      }

      .cdk-drag-preview {
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
          0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
      }

      .cdk-drag-placeholder {
        opacity: 0;
      }

      .cdk-drag-animating {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      .example-box:last-child {
        border: none;
      }

      .example-list.cdk-drop-list-dragging
        .example-box:not(.cdk-drag-placeholder) {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class AppComponent {
  todo: string[] = [];

  done: string[] = [];

  taskTitle: string = '';

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addTask() {
    if (this.taskTitle) {
      this.todo.push(this.taskTitle);
      this.taskTitle = '';
    }
    console.log(this.todo);
  }
}
