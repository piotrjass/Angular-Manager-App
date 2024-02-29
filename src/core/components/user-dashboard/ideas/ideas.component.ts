import { Component } from '@angular/core';
import { IdeaItemComponent } from '../idea-item/idea-item.component';
import { AddIdeaFormComponent } from '../add-idea-form/add-idea-form.component';

@Component({
  selector: 'app-ideas',
  standalone: true,
  imports: [IdeaItemComponent, AddIdeaFormComponent],
  templateUrl: './ideas.component.html',
  styleUrl: './ideas.component.css',
})
export class IdeasComponent {}
