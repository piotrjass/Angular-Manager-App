import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drag-drop-item',
  standalone: true,
  imports: [],
  templateUrl: './drag-drop-item.component.html',
  styleUrl: './drag-drop-item.component.css',
})
export class DragDropItemComponent {
  @Input() title: string = '';
}
