import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-tag-item',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './tag-item.component.html',
  styleUrl: './tag-item.component.css',
})
export class TagItemComponent {
  @Input() title: string = '';
}
