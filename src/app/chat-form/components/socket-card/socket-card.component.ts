import {Component, Input, OnInit} from '@angular/core';

import User from '../../User';

@Component({
  selector: 'app-socket-card',
  templateUrl: './socket-card.component.html',
  styleUrls: ['./socket-card.component.scss']
})
export class SocketCardComponent implements OnInit {

  @Input() public user: User;

  constructor() { }

  ngOnInit() {
  }
}
