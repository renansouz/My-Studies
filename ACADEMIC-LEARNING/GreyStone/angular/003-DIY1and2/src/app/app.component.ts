import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  fullName: string = '';
  city: string = '';
  country: string = '';
  sentence: string = '';

  showInfo1() {
    alert(
      `Full Name: ${this.firstName} ${this.lastName}\nEmail: ${this.email}`
    );
  }
  showInfo2() {
    this.sentence = `Hello, my name is ${this.fullName}. I live in ${this.city}, ${this.country}`;
  }
}
