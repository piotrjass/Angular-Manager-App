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

  private Monday = ['Refractoring'];
  private Tuesday = ['Gym', 'Gym2', 'Gym3'];
  private Wednesday = ['Interview'];
  private Thursday = ['TV'];
  private Friday = ['Sport'];

  getTasks() {
    return this.tasks;
  }
  getTasksForTheDay(day: string) {
    return this.tasks
      .filter((task) => task.day === day)
      .map((task) => task.task);
  }
}
