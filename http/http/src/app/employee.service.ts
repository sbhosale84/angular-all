import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employee: any;

  constructor(private http: HttpClient) {}

  getEmpDetails(): Observable<any[]> {
    return this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `an error occurred : ${error.error.message} `;
    } else {
      errorMessage = `server returned code :${error.status}`;
    }
    console.log(errorMessage);

    return throwError('something bad happened, try again later ');
  }
}
