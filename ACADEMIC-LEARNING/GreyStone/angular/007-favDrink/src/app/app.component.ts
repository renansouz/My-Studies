import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent, MatIconModule, MatBadgeModule],
  template: `
    <h1 class="text-3xl font-bold text-center my-16">
      Build your Favorite Drink
    </h1>

    <app-form />
  `,
  styles: [],
})
export class AppComponent {}
