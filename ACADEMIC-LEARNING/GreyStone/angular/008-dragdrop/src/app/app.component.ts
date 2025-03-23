import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [TaskComponent, MatToolbarModule, MatIconModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {}
