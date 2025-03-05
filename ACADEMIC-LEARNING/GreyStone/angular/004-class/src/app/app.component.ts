import { Component, signal } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [ChildComponent],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <p>Message from Child: {{ childMessage }}</p>

    <app-child
      [message]="parentMessage()"
      (messageEvent)="receiveMessage($event)"
    ></app-child>
  `,
  styles: [],
})
export class AppComponent {
  title = '004-class';
  parentMessage = signal('Hello from Parent!');
  childMessage = '';

  receiveMessage(event: string) {
    this.childMessage = event;
  }
}
