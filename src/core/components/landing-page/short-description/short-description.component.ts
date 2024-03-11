import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-short-description',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './short-description.component.html',
  styleUrl: './short-description.component.css',
})
export class ShortDescriptionComponent {}
