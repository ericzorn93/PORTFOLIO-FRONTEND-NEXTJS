import { Component, OnInit } from '@angular/core';
import {MessageSocketService} from './message-socket.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {
  public name: string;

  constructor(private messageSocketService: MessageSocketService) { }

  ngOnInit() {}

  handleSubmit(): void {
    const {name} = this;
    const message: string = this.messageSocketService.logMessage(name);
    console.log(message);
  }
}
