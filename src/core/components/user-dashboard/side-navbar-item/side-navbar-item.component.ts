import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-navbar-item',
  standalone: true,
  imports: [],
  templateUrl: './side-navbar-item.component.html',
  styleUrl: './side-navbar-item.component.css',
})
export class SideNavbarItemComponent {
  @Input() title: string = '';
}
