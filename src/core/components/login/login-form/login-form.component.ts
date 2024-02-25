import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BaseButtonLightComponent } from '../../../../shared/components/base-button-light/base-button-light.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [BaseButtonLightComponent, FormsModule, CommonModule, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }
}
