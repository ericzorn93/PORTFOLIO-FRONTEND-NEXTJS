import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ChatFormComponent } from "./chat-form.component";
import { MessageSocketService } from './services/message-socket.service';
import { FormsModule } from '@angular/forms';
import { SocketCardComponent } from './components/socket-card/socket-card.component';
import { ChatFooterComponent } from './components/chat-footer/chat-footer.component';

@NgModule({
  declarations: [ChatFormComponent, SocketCardComponent, ChatFooterComponent],
  providers: [MessageSocketService],
  imports: [CommonModule, FormsModule],
  exports: [ChatFormComponent]
})
export class ChatFormModule {}
