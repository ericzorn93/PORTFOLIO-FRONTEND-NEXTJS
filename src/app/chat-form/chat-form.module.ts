import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ChatFormComponent } from "./chat-form.component";
import {MessageSocketService} from './message-socket.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ChatFormComponent],
  providers: [MessageSocketService],
  imports: [CommonModule, FormsModule],
  exports: [ChatFormComponent]
})
export class ChatFormModule {}
