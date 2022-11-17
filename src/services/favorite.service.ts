import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Favorite } from 'src/models/favorite.model';
import { SearchResult } from 'src/models/searchResult.model';
import { Constants } from '../constants';
@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  readonly CONSTANTS = Constants;
  constructor(private httpClient: HttpClient) {}

  getFavorites(): any {
    var pointer = this;

    return this.httpClient
      .get(pointer.CONSTANTS.SERVER_URL + 'Favorite/GetFavorites', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .toPromise();
  }

  addFavorite(searchResult: SearchResult): any {
    var pointer = this;
    return this.httpClient
      .post(
        pointer.CONSTANTS.SERVER_URL + 'Favorite/AddFavorite',
        searchResult,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        }
      )
      .toPromise()
      .then((response) => {
        return response;
      });
  }

  removeFavorite(favoriteId: string): any {
    var pointer = this;
    return this.httpClient
      .delete(
        pointer.CONSTANTS.SERVER_URL + `Favorite/RemoveFavorite/${favoriteId}`,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        }
      )
      .toPromise();
  }
}
