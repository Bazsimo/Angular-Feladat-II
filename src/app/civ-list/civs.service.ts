import { Injectable } from '@angular/core';
import {ICivilizations} from '../interfaces/civilizations';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpErrorHandler} from '../shared/http-error-handler';

interface ServerData {
  civilizations: ICivilizations[];
}

@Injectable({
  providedIn: 'root'
})
export class CivsService {

  constructor(private http: HttpClient) { }
  // private civsUrl = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';
  private civsUrl = 'assets/civs.json';
  // private civsUrl = 'api/civilizations';

  getCivs(): Observable<ICivilizations[]> {
    return this.http
      .get<ServerData>(this.civsUrl)
      .pipe(
        // tap(data => console.log(data)),
        map(data => data.civilizations as ICivilizations[]),
        catchError(HttpErrorHandler.handleError)
      );
  }
}
