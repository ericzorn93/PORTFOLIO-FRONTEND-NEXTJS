import { Component, OnInit } from '@angular/core';

import {SearchService} from '../../../../services/search_service/search.service';

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

  makeSearch = async (): Promise<void> => {
    const players: object[] = await this.searchService.searchAllPlayers(this.searchTerm);
    console.log(players);
  }

}
