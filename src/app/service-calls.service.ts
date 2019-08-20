import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {PersonDetails} from './PersonDetails';

@Injectable({
  providedIn: 'root'
})
export class ServiceCallsService {

  baseUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

storeDetails(person): Observable<any> {
  console.log(person.firstName+"service console");
  return this.http.post(`${this.baseUrl}/store`, { data: person })
  .pipe(map((res) => {
    console.log(person);
  }),
  catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
