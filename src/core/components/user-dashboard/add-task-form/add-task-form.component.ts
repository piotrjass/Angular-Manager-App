import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [MatIconModule, FormsModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css',
})
export class AddTaskFormComponent {
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();
  selectedDay: string = '';
  selectedPriority: string = '';
  newTaskText: string = '';
  days: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  priorities: string[] = ['High', 'Medium', 'Low'];
  // onSubmit(f: NgForm) {
  //   console.log(f.value);
  //   console.log(f.valid);
  // }
  onSubmit(f: NgForm) {
    this.formSubmitted.emit(f.value);
  }
}
