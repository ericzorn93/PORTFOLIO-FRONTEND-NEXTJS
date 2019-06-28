import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-socket-card',
  templateUrl: './socket-card.component.html',
  styleUrls: ['./socket-card.component.scss']
})
export class SocketCardComponent implements OnInit {

  @Input() public name: string;

  constructor() { }

  ngOnInit() {
  }

  /**
   * @description
   * Renders the message component with a greeting to the individual.
   */
  renderMessage(): string {
    if(!this.name) {
      return 'No Message';
    }

    return `Hello ${this.name}`;
  }

}
