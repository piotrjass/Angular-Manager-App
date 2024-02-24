import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-button-dark',
  standalone: true,
  imports: [],
  templateUrl: './base-button-dark.component.html',
  styleUrl: './base-button-dark.component.css',
})
export class BaseButtonDarkComponent {
  @Input() title: string = '';
}
