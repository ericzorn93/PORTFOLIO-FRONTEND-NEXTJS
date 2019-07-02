import { Component, OnInit } from '@angular/core';

import {SearchService} from '../../services/search_service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm: string;
  searchPlaceholder = 'Search For Players Here...';
  searchButton = 'Search';

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  makeSearch = (): void => {
    this.searchService.searchAllPlayers()
      .then((searchData: any) => console.log(searchData))
      .catch((error: Error) => console.error(error));
  }

}
