import { Component, OnInit } from '@angular/core';

// import {MessageSocketService} from './services/message-socket.service';
import {UserAgentService} from '../user-agent.service';
import User from './User';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public age: number;
  public users: User[] = [];

  public errorMessage: string;

  constructor(private userAgentService: UserAgentService) { }

  ngOnInit() {}

  submitUser(): void {
    const{firstName, lastName, age} = this;

    if (firstName && lastName && age > 0) {
      const newUser: User = new User(firstName, lastName, age);
      this.users.push(newUser);
      this.clearInputs();

      return;
    }

    this.errorMessage = 'Could not add user.';
  }

  private clearInputs(): void {
    this.firstName = '';
    this.lastName = '';
    this.age = null;
  }

  public removeError(): void {
    this.errorMessage = '';
  }
}
