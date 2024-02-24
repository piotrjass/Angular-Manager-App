import { Component } from '@angular/core';
import { NavbarListItemComponent } from './navbar-list-item/navbar-list-item/navbar-list-item.component';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [NavbarListItemComponent],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
})
export class TopNavbarComponent {
  titles: string[] = ['About us', 'More', 'Contact'];
}
