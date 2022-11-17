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
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.httpClient
      .get(pointer.CONSTANTS.SERVER_URL + 'Search/Search/' + value, {
        headers: headers,
      })
      .toPromise();
  }
}
