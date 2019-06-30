import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./../../app-routing.module";
import { HeaderComponent } from "./header.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { SearchComponent } from "./components/search/search.component";

@NgModule({
  declarations: [HeaderComponent, SearchComponent, NavBarComponent],
  imports: [AppRoutingModule, CommonModule, FormsModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
