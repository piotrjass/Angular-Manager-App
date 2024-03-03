import { Component, HostListener } from '@angular/core';
import { NavbarListItemComponent } from './navbar-list-item/navbar-list-item/navbar-list-item.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { BaseButtonDarkComponent } from '../../../../shared/components/base-button-dark/base-button-dark.component';
import { BaseButtonLightComponent } from '../../../../shared/components/base-button-light/base-button-light.component';
import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { tablerIcons } from '@ng-icons/tabler-icons';
import { tablerMenu2 } from '@ng-icons/tabler-icons';
import { fromEvent, debounceTime } from 'rxjs';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [
    NavbarListItemComponent,
    IconComponent,
    BaseButtonDarkComponent,
    BaseButtonLightComponent,
    LogoComponent,
    RouterLink,
    NgIconComponent,
  ],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
  viewProviders: [
    provideIcons({
      tablerIcons,
      tablerMenu2,
    }),
  ],
})
export class TopNavbarComponent {
  titles: string[] = ['About us', 'More', 'Contact'];
  isMenuOpen: boolean = true;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor() {
    this.checkScreenWidth();
  }

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
