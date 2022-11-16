import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Constants } from '../constants';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  readonly CONSTANTS = Constants;
  constructor(private httpClient: HttpClient) {}

  search(value: string): any {
    var pointer = this;

    return this.httpClient
      .get(pointer.CONSTANTS.SERVER_URL + 'Search/Search/'+value, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .toPromise();
  }
}
