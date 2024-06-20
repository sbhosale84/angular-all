import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'routing-demo';

  constructor(private router: Router) {}
  goToEmp() {
    return this.router.navigate(['/employee']);
  }

  goToDepartment() {
    return this.router.navigate(['/department']);
  }
}
