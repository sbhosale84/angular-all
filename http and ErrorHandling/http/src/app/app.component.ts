import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  template: ` <div *ngIf="errorMessage">{{ errorMessage }}</div>
    <ul *ngIf="!errorMessage">
      <li *ngFor="let employee of employees">
        {{ employee.id }} ({{ employee.title }})
      </li>
    </ul>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'http';

  employees: any;
  errorMessage: string = '';

  constructor(private employeeDetails: EmployeeService) {
    this.employeeDetails.getEmpDetails().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }
}
