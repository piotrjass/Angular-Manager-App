import { Component } from '@angular/core';
import { NavbarListItemComponent } from './navbar-list-item/navbar-list-item/navbar-list-item.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { BaseButtonDarkComponent } from '../../../../shared/components/base-button-dark/base-button-dark.component';
import { BaseButtonLightComponent } from '../../../../shared/components/base-button-light/base-button-light.component';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [
    NavbarListItemComponent,
    IconComponent,
    BaseButtonDarkComponent,
    BaseButtonLightComponent,
  ],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
})
export class TopNavbarComponent {
  titles: string[] = ['About us', 'More', 'Contact'];
}
