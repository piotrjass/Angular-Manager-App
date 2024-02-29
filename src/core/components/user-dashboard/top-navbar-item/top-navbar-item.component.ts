import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-top-navbar-item',
  standalone: true,
  imports: [MatIcon, RouterLink],
  templateUrl: './top-navbar-item.component.html',
  styleUrl: './top-navbar-item.component.css',
})
export class TopNavbarItemComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() link: string = '';
}
