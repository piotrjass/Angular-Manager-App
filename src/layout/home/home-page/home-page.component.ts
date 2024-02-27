import { Component } from '@angular/core';
import { TopNavbarComponent } from '../navbar/top-navbar/top-navbar.component';
import { HeroSectionComponent } from '../../../core/components/landing-page/hero-section/hero-section.component';
import { ShortDescriptionComponent } from '../../../core/components/landing-page/short-description/short-description.component';
import { CardsContainerComponent } from '../../../core/components/landing-page/cards-container/cards-container.component';
import { FooterComponent } from '../../../core/components/landing-page/footer/footer.component';
import { ImageContainerComponent } from '../../../core/components/landing-page/image-container/image-container.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    TopNavbarComponent,
    HeroSectionComponent,
    ShortDescriptionComponent,
    CardsContainerComponent,
    FooterComponent,
    ImageContainerComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
