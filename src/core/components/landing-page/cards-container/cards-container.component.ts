import { Component } from '@angular/core';
import { FunctionCardComponent } from './function-card/function-card.component';

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [FunctionCardComponent],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css',
})
export class CardsContainerComponent {
  features: any = [
    {
      title: 'Calendar',
      icon: 'tablerCalendarWeek',
      desc: 'Easy and accurte planning of the tasks for each day of the week.',
      color: 'bg-gradient-to-r from-cyan-100 to-blue-100',
    },
    {
      title: 'Ideas',
      icon: 'tablerBulbFilled',
      desc: 'Write down all of the precious ideas that comes to your mind for future features and projects',
      color: 'bg-gradient-to-r from-fuchsia-100 to-rose-100',
    },
    {
      title: 'Long-term goals',
      icon: 'tablerRocket',
      desc: 'Set youself a long-term goal to keep yourself motivated',
      color: 'bg-gradient-to-r from-green-200 to-teal-200',
    },
  ];
}
