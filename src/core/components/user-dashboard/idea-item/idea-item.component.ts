import { Component, Input } from '@angular/core';
import { IdeasService } from '../../../../shared/services/ideas.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { tablerIcons } from '@ng-icons/tabler-icons';
import {
  tablerBrandAngular,
  tablerBrandTypescript,
  tablerCashBanknote,
} from '@ng-icons/tabler-icons';

import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-idea-item',
  standalone: true,
  imports: [MatIcon, NgIconComponent],
  templateUrl: './idea-item.component.html',
  styleUrl: './idea-item.component.css',
  viewProviders: [
    provideIcons({
      tablerIcons,
      tablerBrandAngular,
      tablerBrandTypescript,
      tablerCashBanknote,
    }),
  ],
})
export class IdeaItemComponent {
  constructor(private i: IdeasService) {
    this.ideas = this.i.getIdeas();
  }

  ideas: any[];
  @Input() ideaText: string = '';
}
