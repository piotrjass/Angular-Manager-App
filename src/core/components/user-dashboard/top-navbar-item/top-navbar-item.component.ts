import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-top-navbar-item',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './top-navbar-item.component.html',
  styleUrl: './top-navbar-item.component.css',
})
export class TopNavbarItemComponent {
  @Input() title: string = '';
}
