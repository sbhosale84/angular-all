import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ComponentNotFoundComponent } from './component-not-found/component-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/employeeList', pathMatch: 'full' },
  { path: 'employeeList', component: EmployeeListComponent },
  { path: 'employeeList/:id', component: EmployeeDetailsComponent },
  { path: '**', component: ComponentNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
