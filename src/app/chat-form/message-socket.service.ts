import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageSocketService {

  constructor() { }

  public logMessage(message: string): string {
    return `Here is the message: ${message}`;
  }
}
