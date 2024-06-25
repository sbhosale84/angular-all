import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { empData } from '../empData';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  employees: empData[] | undefined;

  constructor(
    private empService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.empService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }
  viewDetails(id: number) {
    return this.router.navigate([id], { relativeTo: this.route });
  }
}
