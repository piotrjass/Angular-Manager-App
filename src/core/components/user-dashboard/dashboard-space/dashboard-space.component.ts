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
  selector: 'app-dashboard-space',
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
  templateUrl: './dashboard-space.component.html',
  styleUrl: './dashboard-space.component.css',
})
export class DashboardSpaceComponent {
  constructor(private e: TaskService) {
    this.tasks = this.e.getTasks();
  }

  tasks: any[];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  Monday = ['Refractoring'];
  Tuesday = ['Gym'];
  Wednesday = ['Interview'];
  Thursday = ['TV'];
  Friday = ['Sport'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  newTask: string = '';

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
