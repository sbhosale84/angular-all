import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { empData } from './EmpData';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailsService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<empData[]> {
    return this.http.get<empData[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
