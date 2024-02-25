import { Component } from '@angular/core';
import { SideNavbarItemComponent } from '../side-navbar-item/side-navbar-item.component';
import { SideNavbarCardComponent } from '../side-navbar-card/side-navbar-card.component';
import { TagItemComponent } from '../tag-item/tag-item.component';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [SideNavbarItemComponent, SideNavbarCardComponent, TagItemComponent],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css',
})
export class SideNavbarComponent {
  titles: string[] = ['general', 'project_1', 'project_2', 'project_3'];
  tags: any[] = [
    {
      title: 'vue',
      color: 'text-green-300',
    },
    {
      title: 'angular',
      color: 'text-red-300',
    },
    {
      title: 'javascript',
      color: 'text-yellow-400',
    },
    {
      title: 'typescript',
      color: 'text-blue-400',
    },
  ];
  // tags: string[] = ['angular', 'vue', 'node', 'typescript'];
}
