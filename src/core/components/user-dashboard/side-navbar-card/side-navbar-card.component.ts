import { Component, ModuleWithProviders } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
@Component({
  selector: 'app-side-navbar-card',
  standalone: true,
  imports: [NgCircleProgressModule],
  templateUrl: './side-navbar-card.component.html',
  styleUrl: './side-navbar-card.component.css',
  providers: [
    (
      NgCircleProgressModule.forRoot({
        radius: 100,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: '#78C000',
        innerStrokeColor: '#C7E596',
        animationDuration: 300,
      }) as ModuleWithProviders<NgCircleProgressModule>
    ).providers!,
  ],
})
export class SideNavbarCardComponent {}
