import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { empData } from '../empData';
import { EmpDetailsService } from '../emp-details.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employees: empData[] = [];

  constructor(
    private employeeService: EmpDetailsService,
    private router: Router
  ) {
    this.employeeService.getEmpData().subscribe((data) => {
      this.employees = data;
    });
  }

  goToDetails(id: number): void {
    this.router.navigate(['/employeeDetails', id], {
      queryParams: { info: 'some info', additional: 'more details' },
    });
  }
}
