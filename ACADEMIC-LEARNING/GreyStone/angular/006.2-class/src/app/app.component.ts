import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-root',
  standalone: true, // Make it standalone
  imports: [CommonModule], // Import CommonModule to use *ngFor
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.dataService.getPosts().subscribe(
      (data: any) => {
        // Explicit type
        this.posts = data;
      },
      (error: any) => {
        // Explicit type
        console.error('Error fetching posts:', error);
      }
    );
  }
}
