import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerTitle: string;

  constructor() {
    this.headerTitle = 'Draft-EZ';
  }

  ngOnInit() {
  }

}
