import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Favorite } from '../../models/favorite.model';
import { FavoriteService } from 'src/services/favorite.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export enum SelectType {
  single,
  multiple,
}

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  constructor(
    private favoriteService: FavoriteService,
    private _snackBar: MatSnackBar
  ) {}

  displayedColumns: string[] = [
    'select',
    'favoriteId',
    'userId',
    'gitHubId',
    'name',
    'description',
    'createdAt',
    'url',
  ];

  favorites: Favorite[] = [];

  selectType = [
    { text: 'Single', value: SelectType.single },
    { text: 'Multiple', value: SelectType.multiple },
  ];

  dataSource = new MatTableDataSource<Favorite>(this.favorites);
  selection = new SelectionModel<Favorite>(true, []);
  displayType = SelectType.single;

  async ngOnInit() {
    let result: Favorite[] = await this.favoriteService.getFavorites();
    this.favorites = result;
    this.dataSource = new MatTableDataSource<Favorite>(this.favorites);
  }

  selectHandler(row: Favorite) {
    if (this.displayType == SelectType.single) {
      if (!this.selection.isSelected(row)) {
        this.selection.clear();
      }
    }
    this.selection.toggle(row);
  }

  onChange(typeValue: number) {
    this.displayType = typeValue;
    this.selection.clear();
  }

  async remove() {
    let selected = this.selection.selected[0];

    let result = await this.favoriteService.removeFavorite(selected.favoriteId);
    if (result) {
      this._snackBar.open('Favorite has been removed successfully', 'dismiss');
      this.favorites = this.favorites.filter(
        (w) => w.favoriteId != selected.favoriteId
      );
      this.dataSource = new MatTableDataSource<Favorite>(this.favorites);
      this.selection.clear();
    } else {
      this._snackBar.open('something went wrong :\ "', 'dismiss');
    }
  }
}
