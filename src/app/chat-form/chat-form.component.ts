import { Component, OnInit } from '@angular/core';
import {MessageSocketService} from './services/message-socket.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {
  public name: string;
  public socketErrorMessage: string;

  constructor(private messageSocketService: MessageSocketService) { }

  ngOnInit() {}

  /**
   * @description
   * Handles the form submission for the chat
   */
  handleSubmit(): void {
    const { name } = this;

    if(!name) {
      return;
    }

    const customMessage = `Hello ${name}`;
    const messageSuccessful: boolean = this.messageSocketService.sendMessage(customMessage);
    this.name = '';

    console.log(messageSuccessful);

    if(!messageSuccessful) {
      this.socketErrorMessage = 'Could not send the message over the socket';
    }
  }

  /**
   * @description
   * Resets the form input whe filled out
   */
  resetForm(): void {
    this.socketErrorMessage = '';
  }
}
