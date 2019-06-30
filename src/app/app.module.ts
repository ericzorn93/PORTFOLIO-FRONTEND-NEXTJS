import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

import { HeaderModule } from "./modules/header/header.module";
import { SearchService } from "./services/search_service/search.service";
import { FooterModule } from "./modules/footer/footer.module";
import { AllPlayersModule } from "./modules/all-players/all-players.module";
import { AboutModule } from "./modules/about/about.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderModule,
    FooterModule,
    AllPlayersModule,
    AboutModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
