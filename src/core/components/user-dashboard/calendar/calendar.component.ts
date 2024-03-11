import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DragDropItemComponent } from '../drag-drop-item/drag-drop-item.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AddTaskFormComponent } from '../add-task-form/add-task-form.component';
import { TaskService } from '../../../../shared/services/task.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    DragDropItemComponent,
    DragDropItemComponent,
    MatIconModule,
    FormsModule,
    AddTaskFormComponent,
    CommonModule,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  constructor(private e: TaskService) {
    this.tasks = this.e.getTasks();
  }
  getTasksForDay(day: string) {
    this.tasksForDay = this.e.getTasksForTheDay(day);
  }
  tasksForDay: string[] = [];
  tasks: any[] = [];

  Monday = ['Refractoring', 'Coding'];
  Tuesday = ['Gym', 'Gaming'];
  Wednesday = ['Interview', 'Work'];
  Thursday = ['Football', 'Learning'];
  Friday = ['Go out', 'Running'];

  getDatesOfWeekForCurrentWeek(): string[] {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const today = new Date();
    const currentDayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
    const daysUntilMonday = (7 + currentDayOfWeek - 1) % 7;
    const monday = new Date(today);
    monday.setDate(today.getDate() - daysUntilMonday);
    const weekDates: string[] = [];
    const addLeadingZero = (num: number): string => {
      return num < 10 ? `0${num}` : `${num}`;
    };

    for (let i = 0; i < 5; i++) {
      const currentDate = new Date(monday);
      currentDate.setDate(monday.getDate() + i);
      const formattedDate = `${addLeadingZero(
        currentDate.getDate(),
      )}.${addLeadingZero(
        currentDate.getMonth() + 1,
      )}.${currentDate.getFullYear()}`;
      weekDates.push(formattedDate);
    }

    return weekDates;
  }
  datesOfWeekForCurrentWeek = this.getDatesOfWeekForCurrentWeek();
  handleFormSubmission(formData: any) {
    const { task, day, Priority } = formData;
    switch (day) {
      case 'Monday':
        this.Monday.push(task);
        break;
      case 'Tuesday':
        this.Tuesday.push(task);
        break;
      case 'Wednesday':
        this.Wednesday.push(task);
        break;
      case 'Thursday':
        this.Thursday.push(task);
        break;
      case 'Friday':
        this.Friday.push(task);
        break;
      default:
        console.log('Invalid day');
    }
  }
  //

  // cdk functions
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      console.log(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
