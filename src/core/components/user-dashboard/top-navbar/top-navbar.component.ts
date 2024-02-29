import { Component } from '@angular/core';
import { TopNavbarItemComponent } from '../top-navbar-item/top-navbar-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [TopNavbarItemComponent, RouterLink],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
})
export class TopNavbarComponent {
  components: any[] = [
    {
      title: 'Calendar',
      icon: 'calendar_month',
      link: 'calendar',
    },
    { title: 'Ideas', icon: 'lightbulb', link: 'ideas' },
    { title: 'LongTerm', icon: 'rocket_launch', link: 'LongTerm' },
  ];
}
