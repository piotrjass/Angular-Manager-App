import { Component } from '@angular/core';
import { BaseButtonDarkComponent } from '../../../../shared/components/base-button-dark/base-button-dark.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [BaseButtonDarkComponent, FormsModule, CommonModule, RouterLink],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
})
export class SignupFormComponent {
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }
}
