import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  imports: [FormComponent],
  template: `
    <h1 class="text-3xl font-bold text-center my-16">
      Build your Favorite Drink
    </h1>
    <app-form />
  `,
  styles: [],
})
export class AppComponent {}
