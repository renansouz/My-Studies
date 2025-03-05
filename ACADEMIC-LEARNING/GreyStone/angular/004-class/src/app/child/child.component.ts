import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3>Child Component</h3>
    <p>Received from Parent: {{ message() }}</p>

    <button (click)="sendMessage()">Send Message to Parent</button>
  `,
  styles: [],
})
export class ChildComponent {
  message = input('');
  messageEvent = output<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from Child!');
  }
}
