import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { tablerIcons } from '@ng-icons/tabler-icons';
import {
  tablerBrandAngular,
  tablerBrandTypescript,
  tablerCashBanknote,
  tablerCalendarWeek,
  tablerBulbFilled,
  tablerRocket,
} from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-function-card',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './function-card.component.html',
  styleUrl: './function-card.component.css',
  viewProviders: [
    provideIcons({
      tablerIcons,
      tablerBrandAngular,
      tablerBrandTypescript,
      tablerCashBanknote,
      tablerCalendarWeek,
      tablerBulbFilled,
      tablerRocket,
    }),
  ],
})
export class FunctionCardComponent {
  @Input() color: string = '';
  @Input() desc: string = '';
  @Input() title: string = '';
  @Input() icon: string = '';
}
