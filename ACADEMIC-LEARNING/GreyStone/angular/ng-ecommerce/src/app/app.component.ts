import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from "./pages/products-list/products-list.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductsListComponent],
  template: `
  <app-header />
  <app-products-list>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'ng-ecommerce';
}
