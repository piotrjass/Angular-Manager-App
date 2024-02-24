import { Routes } from '@angular/router';
import { HomePageComponent } from '../layout/home/home-page/home-page.component';
import { LoginPageComponent } from '../layout/login/login-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'HomePage',
  },
  {
    path: 'login',
    component: LoginPageComponent,
    title: 'LoginPage',
  },
  {
    path: 'singup',
    component: LoginPageComponent,
    title: 'Signup',
  },
];
