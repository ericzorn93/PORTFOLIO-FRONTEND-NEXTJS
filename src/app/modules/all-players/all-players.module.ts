import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AllPlayersComponent } from "./all-players.component";
import { AllPlayersService } from "./services/all-players.service";

@NgModule({
  declarations: [AllPlayersComponent],
  providers: [AllPlayersService],
  imports: [CommonModule],
  exports: [AllPlayersComponent]
})
export class AllPlayersModule {}
