import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { SecretComponent } from './components/secret/secret.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'secret', component: SecretComponent },
];
