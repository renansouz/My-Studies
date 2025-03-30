import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secret',
  imports: [],
  templateUrl: './secret.component.html',
  styleUrl: './secret.component.css',
})
export class SecretComponent {
  user: any;
  storedUser = localStorage.getItem('user');

  constructor() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }
}
