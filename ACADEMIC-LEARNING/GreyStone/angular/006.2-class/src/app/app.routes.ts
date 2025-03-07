import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
export const routes: Routes = [
  { path: '', component: TodoComponent }, // Default route
  { path: 'about-us', component: AboutUsComponent },
];
