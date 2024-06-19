import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry, throwError } from 'rxjs';

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
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);

    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
