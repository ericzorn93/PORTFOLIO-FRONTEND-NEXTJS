import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import {UserAgentService} from '../../user-agent.service';

enum SocketActions {
  Connect = 'connect',
  Disconnect = 'disconnect',
  Message = 'message',
}


@Injectable({
  providedIn: 'root'
})
export class MessageSocketService {
  private io: any;
  private readonly socketIoConnection: string;

  constructor(private userAgentService: UserAgentService) {
    this.socketIoConnection = 'https://ez-auto.herokuapp.com/';
    this.io = socketIo(this.socketIoConnection);
  }

  public sendMessage(message: string): boolean {
    if(this.socketIoConnected()) {
      this.io.emit(SocketActions.Message, message);

      return true;
    }

    return false;
  }


  private socketIoConnected(): boolean {
    return this.io.connected;
  }
}
