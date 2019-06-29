import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchPlaceholder: string;
  searchButton: string;

  constructor() {
    this.searchPlaceholder = 'Search For Players Here...';
    this.searchButton = 'search';
  }

  ngOnInit() {
  }

}
