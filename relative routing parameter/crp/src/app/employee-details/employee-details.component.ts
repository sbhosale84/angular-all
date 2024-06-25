import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { empData } from '../empData';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent implements OnInit {
  employee: empData | undefined;
  id = 0;
  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.id = parseInt(param.get('id') ?? '0');
      this.empService.getEmployeeById(this.id).subscribe((data) => {
        this.employee = data;
      });
    });
  }
}
