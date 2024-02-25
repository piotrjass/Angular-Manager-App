import { Component } from '@angular/core';
import { BaseButtonDarkComponent } from '../../../../shared/components/base-button-dark/base-button-dark.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [BaseButtonDarkComponent, FormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }
}
