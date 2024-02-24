import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-base-button-dark',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './base-button-dark.component.html',
  styleUrl: './base-button-dark.component.css',
})
export class BaseButtonDarkComponent {
  @Input() title: string = '';
}
