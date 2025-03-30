import { Component, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-increment',
  imports: [],
  templateUrl: './increment.component.html',
  styleUrl: './increment.component.css',
})
export class IncrementComponent {
  count = input<number>();
  countChange = output<number>();

  increment() {
    this.countChange.emit((this.count() || 0) + 1);
  }
}
