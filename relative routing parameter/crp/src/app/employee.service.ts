import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { empData } from './empData';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<empData[]> {
    return this.http.get<empData[]>(this.url);
  }
  getEmployeeById(id: number): Observable<empData> {
    return this.http.get<empData>(`${this.url}/${id}`);
  }
}
