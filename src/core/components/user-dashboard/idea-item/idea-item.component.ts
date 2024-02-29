import { Component, Input } from '@angular/core';
import { IdeasService } from '../../../../shared/services/ideas.service';
@Component({
  selector: 'app-idea-item',
  standalone: true,
  imports: [],
  templateUrl: './idea-item.component.html',
  styleUrl: './idea-item.component.css',
})
export class IdeaItemComponent {
  constructor(private i: IdeasService) {
    this.ideas = this.i.getIdeas();
  }

  ideas: any[];
  @Input() ideaText: string = '';
}
