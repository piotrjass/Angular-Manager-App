import { Routes } from '@angular/router';
import { HomePageComponent } from '../layout/home/home-page/home-page.component';
import { LoginPageComponent } from '../layout/login/login-page/login-page.component';
import { SignupFormComponent } from '../core/components/login/signup-form/signup-form.component';
import { LoginFormComponent } from '../core/components/login/login-form/login-form.component';

// export const routes: Routes = [
//   {
//     path: '',
//     component: HomePageComponent,
//     title: 'HomePage',
//   },
//   {
//     path: 'login',
//     component: LoginPageComponent,
//     title: 'LoginPage',
//   },
//   {
//     path: 'signup-form',
//     component: SignupFormComponent,
//     title: 'SignupPage',
//   },
//   {
//     path: 'login-form',
//     component: LoginFormComponent,
//     title: 'Signup',
//   },
// ];
export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'HomePage',
  },
  {
    path: 'login-form',
    component: LoginPageComponent,
    children: [
      {
        path: '',
        component: LoginFormComponent,
      },
    ],
  },
  {
    path: 'signup-form',
    component: LoginPageComponent, // Użyj LoginPageComponent jako layout dla SignupFormComponent
    children: [
      {
        path: '',
        component: SignupFormComponent,
      },
    ],
  },
];
