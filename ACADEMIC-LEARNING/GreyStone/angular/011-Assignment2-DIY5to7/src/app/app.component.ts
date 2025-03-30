import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DecrementComponent } from './components/decrement/decrement.component';
import { IncrementComponent } from './components/increment/increment.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, IncrementComponent, DecrementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  count: number = 0;

  resetButton() {
    this.count = 0;
  }
}
