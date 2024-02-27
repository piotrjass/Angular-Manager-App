import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = [
    { task: 'Walk', day: 'Monday', priority: 'Medium' },
    { task: 'Study', day: 'Tuesday', priority: 'High' },
    { task: 'Grocery shopping', day: 'Wednesday', priority: 'Low' },
    { task: 'Clean the house', day: 'Thursday', priority: 'Medium' },
    { task: 'Attend meeting', day: 'Friday', priority: 'High' },
    { task: 'Exercise', day: 'Saturday', priority: 'Low' },
  ];

  getTasks() {
    return this.tasks;
  }
}
