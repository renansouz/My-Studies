import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-decrement',
  imports: [],
  templateUrl: './decrement.component.html',
  styleUrl: './decrement.component.css',
})
export class DecrementComponent {
  count = input<number>();
  countChange = output<number>();

  decrement() {
    this.countChange.emit((this.count() || 0) - 1);
  }
}
