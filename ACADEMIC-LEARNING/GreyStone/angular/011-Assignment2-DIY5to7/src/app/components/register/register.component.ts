import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      country: ['', [Validators.required, Validators.minLength(5)]],
      note: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  success: boolean = false;
  onSubmit() {
    if (this.registerForm.valid) {
      localStorage.setItem('user', JSON.stringify(this.registerForm.value));
      console.warn('User registered:', this.registerForm.value);
      this.success = true;
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    }
  }
  onReset() {
    this.registerForm.reset();
  }
}
