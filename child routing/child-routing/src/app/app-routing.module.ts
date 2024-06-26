import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { OverViewComponent } from './over-view/over-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'employeeDetails', component: EmployeeDetailsComponent }
    ]
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [
      {
        path: 'employeeDetails',
        component: EmployeeDetailsComponent,
        children: [
          { path: 'overview', component: OverViewComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
