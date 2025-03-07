import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <h1 class="center">Welcome to the future</h1>
    <div class="image-slider">
      <button mat-icon-button (click)="prevImage()">
        <mat-icon>chevron_left</mat-icon>
      </button>
      <mat-card>
        <img
          mat-card-image
          [src]="images[currentImageIndex]"
          alt="Image slider"
        />
      </mat-card>
      <button mat-icon-button (click)="nextImage()">
        <mat-icon>chevron_right</mat-icon>
      </button>
    </div>
  `,
  styles: `.center {
    text-align: center;
  }
  .image-slider {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  mat-card {
    width: 90%;
    margin: 16px;
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }`,
})
export class HomeComponent {
  images: string[] = [
    'https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/space-chromebook-wallpaper.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeBYLXGhyJX5nDvr8zBkb4vg2bMyB_XrkRTg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9L9xXf2ltrjYUAN7i6VYs_GusGZHKCfu-FQ&s',
  ];
  currentImageIndex = 0;

  prevImage() {
    this.currentImageIndex =
      this.currentImageIndex > 0
        ? this.currentImageIndex - 1
        : this.images.length - 1;
  }

  nextImage() {
    this.currentImageIndex =
      this.currentImageIndex < this.images.length - 1
        ? this.currentImageIndex + 1
        : 0;
  }
}
