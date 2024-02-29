import { Routes } from '@angular/router';
import { HomePageComponent } from '../layout/home/home-page/home-page.component';
import { LoginPageComponent } from '../layout/login/login-page/login-page.component';
import { SignupFormComponent } from '../core/components/login/signup-form/signup-form.component';
import { LoginFormComponent } from '../core/components/login/login-form/login-form.component';
import { UserdashboardComponent } from '../layout/userdashboard/userdashboard.component';
import { CalendarComponent } from '../core/components/user-dashboard/calendar/calendar.component';
import { IdeasComponent } from '../core/components/user-dashboard/ideas/ideas.component';

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
    component: LoginPageComponent,
    children: [
      {
        path: '',
        component: SignupFormComponent,
      },
    ],
  },
  {
    path: 'user-dashboard',
    component: UserdashboardComponent,
    children: [
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'ideas',
        component: IdeasComponent,
      },
    ],
  },
];
