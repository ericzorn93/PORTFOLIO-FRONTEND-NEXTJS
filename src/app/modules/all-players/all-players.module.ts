import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AllPlayersComponent } from "./all-players.component";

@NgModule({
  declarations: [AllPlayersComponent],
  imports: [CommonModule],
  exports: [AllPlayersComponent]
})
export class AllPlayersModule {}
