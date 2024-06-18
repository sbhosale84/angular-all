import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from './employee-details.service';

@Component({
  selector: 'app-root',
  template: `
    <div *ngFor="let employee of employees">
      {{ employee.id }}{{ employee.name }}
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  employees: any;

  constructor(private empService: EmployeeDetailsService) {
    this.employees = this.empService.getEmployees();
  }

  // employees = [
  //   { id: 1, name: 'soham' },
  //   { id: 2, name: 'Namrata' },
  //   { id: 3, name: 'Shrihari' },
  //   { id: 4, name: 'Amit' },
  //   { id: 5, name: 'Tushar' },
  // ];
}
