import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailsService {
  private employees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Jim Brown' },

  ];
  constructor(private http: HttpClient) {}

  getClients(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getEmployees() {
    return this.employees;
  }
}
