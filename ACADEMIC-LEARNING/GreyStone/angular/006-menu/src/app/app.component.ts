import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, RouterLink, RouterModule],
  template: `
    <header class="bg-red-500">
      <button routerLink="/" mat-button>Home</button>
      <button routerLink="/about" mat-button>About</button>
      <button routerLink="/contact" mat-button>Contact</button>
    </header>

    <router-outlet></router-outlet>
  `,
  styles: [``],
})
export class AppComponent {}
