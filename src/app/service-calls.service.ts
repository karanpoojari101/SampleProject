import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Car} from './Car';

@Injectable({
  providedIn: 'root'
})
export class ServiceCallsService {

  baseUrl = 'http://localhost/api';
  cars: Car[];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Car[]> {
    return this.http.post(`${this.baseUrl}/store`, null).pipe(
      map((res) => {
        this.cars = res.data;
        return this.cars;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
