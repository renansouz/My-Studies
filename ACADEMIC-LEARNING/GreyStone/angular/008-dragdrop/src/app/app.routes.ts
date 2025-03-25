import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { RegisterComponent } from './register/register.component';
import { LogicComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LogicComponent,
  },
];
