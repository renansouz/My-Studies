import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
};

@Component({
  selector: 'app-custom-sidenav',
  imports: [MatListModule, MatIconModule, CommonModule],
  template: `
    <div class="sidenav-header">
      <img
        width="100"
        height="100"
        src="https://media.licdn.com/dms/image/v2/D4D03AQEYp1rMrZmj3A/profile-displayphoto-shrink_800_800/B4DZSWM63JHkAc-/0/1737686757749?e=1746662400&v=beta&t=AJ4ZAGMsEb5-XM1reBkMf5abPivsBggFcqgvv00INmI"
      />
      <div class="header-text">
        <h2>Your channel</h2>
        <p>Renan Silva</p>
      </div>
    </div>
    <mat-nav-list>
      <a mat-list-item *ngFor="let item of menuItems()">
        <mat-icon matListItemIcon> {{ item.icon }} </mat-icon>
        <span matListItemTitle>{{ item.label }} </span>
      </a>
    </mat-nav-list>
  `,
  styles: `
    .sidenav-header{ 
      padding-top: 24px;
      text-align: center;

      >img {
        border-radius: 100%;
        object-fit: cover;
        margin-bottom: 10px
      }
      
      .header-text {
        >h2 {
          margin: 0;
          font-size:1rem;
          line-height: 1.5rem
        }

        >p {
          margin:0;
          font-size: 0.8rem;
        }
      }
    }

  `,
})
export class CustomSidenavComponent {
  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics',
    },
    {
      icon: 'comments',
      label: 'Comments',
      route: 'comments',
    },
  ]);
}
