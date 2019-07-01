import { Injectable } from "@angular/core";
import * as socketIO from "socket.io-client";

enum SocketActions {
  Message = "message"
}

@Injectable({
  providedIn: "root"
})
export class SocketService {
  private socketIoUrl = "https://draft-ez-api.herokuapp.com";
  public io: any;

  constructor() {}

  public connectSocket(): any {
    this.io = socketIO(this.socketIoUrl);
  }

  public disconnectSocket(): void {
    if (!this.io) {
      return;
    }

    this.io.disconnect();
  }

  public sendMessage(message: string): void {
    if (!this.io) {
      return;
    }

    this.io.emit(SocketActions.Message, message);
  }
}
