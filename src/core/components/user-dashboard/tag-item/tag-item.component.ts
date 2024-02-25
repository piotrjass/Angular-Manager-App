import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-item',
  standalone: true,
  imports: [],
  templateUrl: './tag-item.component.html',
  styleUrl: './tag-item.component.css',
})
export class TagItemComponent {
  @Input() title: string = '';
}
