import { Injectable } from '@angular/core';
import {ICivilizations} from './civilizations';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

interface ServerData {
  civilizations: ICivilizations[];
}

@Injectable({
  providedIn: 'root'
})
export class CivsService {

  constructor(private http: HttpClient) {
  }
  // private civsUrl = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';
  private civsUrl = 'assets/civs.json';

  private static handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getCivs(): Observable<ICivilizations[]> {
    return this.http
      .get<ServerData>(this.civsUrl)
      .pipe(
        // tap(data => console.log(data)),
        map(data => data.civilizations as ICivilizations[],
        catchError(CivsService.handleError))
      );
  }
}
