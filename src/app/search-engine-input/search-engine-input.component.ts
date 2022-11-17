import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Favorite } from 'src/models/favorite.model';
import { FavoriteService } from 'src/services/favorite.service';
import { SearchResult } from '../../models/searchResult.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-engine-input',
  templateUrl: './search-engine-input.component.html',
  styleUrls: ['./search-engine-input.component.scss'],
})
export class SearchEngineInputComponent implements OnInit {
  searchResults: SearchResult[] = [];
  searchValue: string = '';
  selected: any = {};
  loading: boolean = false;

  constructor(
    private SearchService: SearchService,
    private favoriteService: FavoriteService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  async onSearchPress() {
    if (!this.searchValidation()) {
      this.loading = false;
      return;
    }
    this.loading = true;
    let result: SearchResult[] = await this.SearchService.search(
      this.searchValue
    );

    if (result != null) {
      this.searchResults = result;
    }
    this.loading = false;
  }

  searchValidation() {
    let isValid = true;
    isValid = this.searchValue.length > 0;
    return isValid;
  }

  async onSelection(item: SearchResult) {
    //add to favorites
    let result = await this.onAddFavorite(item);
    console.log(result);
  }

  async onAddFavorite(searchResult: SearchResult) {
    let result = await this.favoriteService.addFavorite(searchResult);
    if (result) {
      searchResult.marked = true;
      this._snackBar.open('favorite has been added successfully', 'dismiss');
    }
  }

  async onRemoveFavorite(favorite: Favorite) {
    let result = await this.favoriteService.removeFavorite(favorite.favoriteId);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
