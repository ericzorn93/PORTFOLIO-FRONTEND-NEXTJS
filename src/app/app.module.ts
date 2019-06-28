import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {ChatFormModule} from './chat-form/chat-form.module';
import {FormsModule} from '@angular/forms';
import {UserAgentService} from './user-agent.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ChatFormModule, FormsModule],
  providers: [UserAgentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
