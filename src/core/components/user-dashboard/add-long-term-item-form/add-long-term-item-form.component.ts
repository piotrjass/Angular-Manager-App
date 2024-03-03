import { Component } from '@angular/core';
import { FormsModule, NgForm, Validators } from '@angular/forms';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-long-term-item-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-long-term-item-form.component.html',
  styleUrl: './add-long-term-item-form.component.css',
})
export class AddLongTermItemFormComponent {
  form: any;
  goalRegex: string = '';
  constructor() {
    this.form = new FormGroup({
      newGoal: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40),
        Validators.pattern(this.goalRegex),
      ]),
    });
  }
  get newGoal() {
    return this.form.get('newGoal');
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
