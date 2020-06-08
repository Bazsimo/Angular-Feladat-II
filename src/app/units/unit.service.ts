import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {IUnit} from '../interfaces/unit-interface';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpErrorHandler} from '../shared/http-error-handler';

interface ServerDataArray {
  units: IUnit[];
}

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http: HttpClient) { }

  private unitsUrl = 'assets/units.json';

  getUnits(): Observable<IUnit[]> {
    return this.http
      .get<ServerDataArray>(this.unitsUrl)
      .pipe(
        // tap(data => console.table(data)),
        map(data => data.units as IUnit[]),
        catchError(HttpErrorHandler.handleError)
      );
  }

  getOneUnit(inputUrl: string): Observable<IUnit> {
    return this.http
      .get<IUnit>(inputUrl)
      .pipe(
        // tap(data => console.table(data)),
        catchError(HttpErrorHandler.handleError)
      );
  }
}
