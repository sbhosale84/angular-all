import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpDetailsService } from '../emp-details.service';
import { empData } from '../empData'; // Assuming this interface defines the structure of employee data

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: empData | undefined;
  id: number = 0;
  optionalParams: { [key: string]: string | null } = {};

  constructor(
    private empService: EmpDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id') ?? '0', 10);
      this.fetchEmployeeDetails();
    });

    this.route.queryParamMap.subscribe((queryParams) => {
      this.optionalParams = {
        info: queryParams.get('info'),
        additional: queryParams.get('additional'),
      };
    });
  }

  fetchEmployeeDetails() {
    this.empService.getEmpData().subscribe((data: empData[]) => {
      this.employee = data.find((emp) => emp.id === this.id);
    });
  }
}
