import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AllPlayersComponent } from "./all-players.component";
import { SocketService } from "src/app/services/socket_service/socket.service";
import { AllPlayersService } from "./services/all-players.service";

@NgModule({
  declarations: [AllPlayersComponent],
  providers: [SocketService, AllPlayersService],
  imports: [CommonModule],
  exports: [AllPlayersComponent]
})
export class AllPlayersModule {}
