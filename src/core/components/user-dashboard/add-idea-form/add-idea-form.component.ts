import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-idea-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-idea-form.component.html',
  styleUrl: './add-idea-form.component.css',
})
export class AddIdeaFormComponent {
  newIdea: string = '';
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }
}
