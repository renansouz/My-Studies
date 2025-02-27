import { Component, input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button (click)="handleButtonClick()">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input('')

  handleButtonClick() {

  }
}
