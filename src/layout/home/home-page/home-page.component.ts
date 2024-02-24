import { Component } from '@angular/core';
import { TopNavbarComponent } from '../navbar/top-navbar/top-navbar.component';
import { HeroSectionComponent } from '../../../core/components/hero-section/hero-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TopNavbarComponent, HeroSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
