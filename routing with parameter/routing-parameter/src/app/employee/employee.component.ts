import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetailsService } from '../employee-details.service';
import { empData } from '../EmpData';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employees: empData[] = [];

  constructor(
    private employeeService: EmployeeDetailsService,
    private router: Router
  ) {
    this.employeeService.getEmployees().subscribe((data: empData[]) => {
      this.employees = data;
    });
  }

  goToDetails(id: number): void {
    this.router.navigate(['/employeeDetails', id]);
  }
}
