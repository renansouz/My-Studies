import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header />
    <router-outlet />
  `,
  styles: ``,
})
export class AppComponent {
  title = 'ng-ecommerce';
}
