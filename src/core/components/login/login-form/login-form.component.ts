import { Component } from '@angular/core';
import { BaseButtonDarkComponent } from '../../../../shared/components/base-button-dark/base-button-dark.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [BaseButtonDarkComponent, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';
  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value);
    console.log(loginForm.valid);
  }
}
