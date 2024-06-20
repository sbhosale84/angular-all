import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetailsService } from '../employee-details.service';
import { empData } from '../EmpData';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  employee: empData | undefined;

  constructor(
    private empService: EmployeeDetailsService,
    private route: ActivatedRoute
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.empService.getEmployees().subscribe((data: empData[]) => {
      this.employee = data.find((emp) => emp.id === id);
    });
  }
}
