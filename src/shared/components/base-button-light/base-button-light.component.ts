import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-button-light',
  standalone: true,
  imports: [],
  templateUrl: './base-button-light.component.html',
  styleUrl: './base-button-light.component.css',
})
export class BaseButtonLightComponent {
  @Input() title: string = '';
}
