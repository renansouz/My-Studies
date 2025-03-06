import { Component, computed, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
};

@Component({
  selector: 'app-custom-sidenav',
  imports: [
    MatListModule,
    MatIconModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  template: `
    <div class="sidenav-header">
      <img
        [width]="profilePicSize()"
        [height]="profilePicSize()"
        src="https://media.licdn.com/dms/image/v2/D4D03AQEYp1rMrZmj3A/profile-displayphoto-shrink_800_800/B4DZSWM63JHkAc-/0/1737686757749?e=1746662400&v=beta&t=AJ4ZAGMsEb5-XM1reBkMf5abPivsBggFcqgvv00INmI"
      />
      <div class="header-text" [class.hide-header-text]="!sideNavCollapsed()">
        <h2>Your channel</h2>
        <p>Renan Silva</p>
      </div>
    </div>
    <mat-nav-list>
      <a
        mat-list-item
        *ngFor="let item of menuItems()"
        [routerLink]="item.route"
        routerLinkActive
        #rla="routerLinkActive"
        [activated]="rla.isActive"
      >
        <mat-icon matListItemIcon> {{ item.icon }} </mat-icon>
        <span matListItemTitle *ngIf="sideNavCollapsed()"
          >{{ item.label }}
        </span>
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
    .hide-header-text {
      opacity: 0;
      height: 0;
    }
  `,
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

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

  profilePicSize = computed(() => (!this.sideNavCollapsed() ? '32' : '100'));
}
