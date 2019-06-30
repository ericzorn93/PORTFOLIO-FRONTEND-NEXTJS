import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AllPlayersComponent } from "./modules/all-players/all-players.component";
import { AboutComponent } from "./modules/about/about.component";

const routes: Routes = [
  { path: "", component: AllPlayersComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
