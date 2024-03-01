import { Component } from '@angular/core';
import { LongTermItemComponent } from '../long-term-item/long-term-item.component';

@Component({
  selector: 'app-long-term-dashboard',
  standalone: true,
  imports: [LongTermItemComponent],
  templateUrl: './long-term-dashboard.component.html',
  styleUrl: './long-term-dashboard.component.css',
})
export class LongTermDashboardComponent {
  newArr: string[] = ['Gain commerial experience', 'Master Angular'];
  oldArr: string[] = ['Develop Full Stack App', 'Learn Vue', 'Learn Angular'];
}
