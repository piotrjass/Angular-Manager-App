import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavbarItemComponent } from '../top-navbar-item/top-navbar-item.component';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [TopNavbarItemComponent, RouterLink, MatIcon, CommonModule],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
})
export class TopNavbarComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  components: any[] = [
    {
      title: 'Calendar',
      icon: 'calendar_month',
      link: 'calendar',
    },
    { title: 'Ideas', icon: 'lightbulb', link: 'ideas' },
    { title: 'LongTerm', icon: 'rocket_launch', link: 'long-term' },
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    if (window.innerWidth > 768) {
      this.isMenuOpen = true;
    }
  }
}
