import { Injectable } from "@angular/core";
import * as socketIO from "socket.io-client";

@Injectable({
  providedIn: "root"
})
export class SocketService {
  private socketIoUrl = "https://draft-ez-api.herokuapp.com";
  private io = socketIO(this.socketIoUrl);

  constructor() {}

  public disconnectSocket(): boolean {
    this.io.disconnect();
    return true;
  }
}
