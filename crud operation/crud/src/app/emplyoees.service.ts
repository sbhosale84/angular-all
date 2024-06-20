import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { empData } from './EmpDetails';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Dummy API URL

  constructor(private http: HttpClient) {}

  getPosts(): Observable<empData[]> {
    return this.http
      .get<empData[]>(this.apiUrl)
      .pipe(retry(1), catchError(this.handleError));
  }

  addPost(title: string, body: string): Observable<empData> {
    let data = {
      title: title,
      body: body,
      userId: 1,
    };
    return this.http.post<empData>(this.apiUrl, data);
  }

  deletePost(id: number): Observable<empData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<empData>(url).pipe(catchError(this.handleError));
  }
  updatePost(id: number, title: string, body: string): Observable<empData> {
    const data = {
      title: title,
      body: body,
    };
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<empData>(url, data).pipe(catchError(this.handleError));
  }
  updatePatchPost( id: number, title: string,body: string
  ): Observable<empData> {
    const data = {
      id: id,
      title: title,
      body: body,
    };
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .patch<empData>(url, data)
      .pipe(catchError(this.handleError));
  }

  private handleError = (error: HttpErrorResponse) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError('Something bad happened; please try again later.');
  };
}
