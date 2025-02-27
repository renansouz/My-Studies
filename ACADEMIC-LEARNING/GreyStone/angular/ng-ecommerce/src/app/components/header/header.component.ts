import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-900 px-4 py-3 shadow-md flex justify-between">
      <span>My Store</span>
      <app-primary-button label="Cart"/>
    </div>
`,
  styles: ``
})
export class HeaderComponent {
}
