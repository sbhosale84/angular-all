import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  employees = [
    { id: 1, name: 'Soham' },
    { id: 2, name: 'Namarata' },
    { id: 3, name: 'Shree' },
    { id: 4, name: 'Tushar' },
  ];
}
