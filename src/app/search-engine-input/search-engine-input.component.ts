import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
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
  
  constructor(private SearchService: SearchService) {}

  ngOnInit(): void {}

  async onSearchPress() {
    if (!this.searchValidation()) return;
    let result: SearchResult[] = await this.SearchService.search(
      this.searchValue
    );

    if (result != null) {
      this.searchResults = result;
    }
  }

  searchValidation() {
    let isValid = true;
    isValid = this.searchValue.length > 0;
    return isValid;
  }

  async onSelectionChange(change: MatSelectionListChange) {
    console.log(change);
  }
}
