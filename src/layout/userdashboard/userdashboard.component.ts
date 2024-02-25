import { Component } from '@angular/core';
import { TopNavbarComponent } from '../../core/components/user-dashboard/top-navbar/top-navbar.component';
import { SideNavbarComponent } from '../../core/components/user-dashboard/side-navbar/side-navbar.component';
import { DashboardSpaceComponent } from '../../core/components/user-dashboard/dashboard-space/dashboard-space.component';

@Component({
  selector: 'app-userdashboard',
  standalone: true,
  imports: [SideNavbarComponent, TopNavbarComponent, DashboardSpaceComponent],
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css',
})
export class UserdashboardComponent {}
