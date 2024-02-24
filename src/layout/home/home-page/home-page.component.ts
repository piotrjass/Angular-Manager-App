import { Component } from '@angular/core';
import { TopNavbarComponent } from '../navbar/top-navbar/top-navbar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TopNavbarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
