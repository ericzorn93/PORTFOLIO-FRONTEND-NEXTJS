import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./router/app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

import { HeaderModule } from "./modules/header/header.module";
import { SearchService } from "./services/search_service/search.service";
import { FooterModule } from "./modules/footer/footer.module";
import { AllPlayersModule } from "./modules/all-players/all-players.module";
import { AboutModule } from "./modules/about/about.module";
import { SocketService } from "./services/socket_service/socket.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderModule,
    FooterModule,
    AllPlayersModule,
    AboutModule,
    HttpClientModule
  ],
  providers: [SearchService, SocketService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
