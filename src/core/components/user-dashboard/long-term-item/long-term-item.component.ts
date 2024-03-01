import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-long-term-item',
  standalone: true,
  imports: [],
  templateUrl: './long-term-item.component.html',
  styleUrl: './long-term-item.component.css',
})
export class LongTermItemComponent {
  @Input() title: string = '';
}
