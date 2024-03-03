import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IdeasService } from '../../../../shared/services/ideas.service';

@Component({
  selector: 'app-add-idea-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-idea-form.component.html',
  styleUrl: './add-idea-form.component.css',
})
export class AddIdeaFormComponent {
  constructor(private ideasService: IdeasService) {}
  newIdea: string = '';
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);

    if (f.valid) {
      const newIdea = f.value.newIdea;
      const description = f.value.Description;
      this.ideasService.addIdea(newIdea, description);
      f.resetForm();
    }
  }
}
