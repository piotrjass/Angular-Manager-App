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

  tasks: any[];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  Monday = ['Refractoring'];
  Tuesday = ['Gym', 'Gym2', 'Gym3'];
  Wednesday = ['Interview'];
  Thursday = ['TV'];
  Friday = ['Sport'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  newTask: string = '';

  getDatesOfWeekForCurrentWeek(): string[] {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const today = new Date();
    const currentDayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)

    // Calculate the difference between current day and Monday
    const daysUntilMonday = (7 + currentDayOfWeek - 1) % 7;

    // Set the date to Monday of the current week
    const monday = new Date(today);
    monday.setDate(today.getDate() - daysUntilMonday);

    // Create an array to hold dates of the week
    const weekDates: string[] = [];

    // Helper function to add leading zeros
    const addLeadingZero = (num: number): string => {
      return num < 10 ? `0${num}` : `${num}`;
    };

    // Populate the array with dates from Monday to Friday
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

  addNewTask() {
    this.todo.push(this.newTask);
  }

  handleFormSubmission(formData: any) {
    this.todo.push(formData);
  }

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
