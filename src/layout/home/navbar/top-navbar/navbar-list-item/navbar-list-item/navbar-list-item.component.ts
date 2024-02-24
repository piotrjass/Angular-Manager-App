import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-list-item',
  standalone: true,
  imports: [],
  templateUrl: './navbar-list-item.component.html',
  styleUrl: './navbar-list-item.component.css',
})
export class NavbarListItemComponent {
  @Input() title: string = '';
}
