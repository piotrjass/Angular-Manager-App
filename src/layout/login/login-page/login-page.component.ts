import { Component } from '@angular/core';
import { LoginFormComponent } from '../../../core/components/login/login-form/login-form.component';
import { SignupFormComponent } from '../../../core/components/login/signup-form/signup-form.component';
import { LogoComponent } from '../../../shared/components/logo/logo.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    LoginFormComponent,
    SignupFormComponent,
    LogoComponent,
    RouterOutlet,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
