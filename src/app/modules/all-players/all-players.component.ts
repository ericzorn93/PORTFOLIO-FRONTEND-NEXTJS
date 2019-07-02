import { Component, OnInit, OnDestroy } from "@angular/core";
import { of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { AllPlayersService } from "./services/all_players_service/all-players.service";
import { SocketService } from "src/app/services/socket_service/socket.service";
import { Post } from "./services/all_players_service/post.interface";

@Component({
  selector: "app-all-players",
  templateUrl: "./all-players.component.html",
  styleUrls: ["./all-players.component.scss"]
})
export class AllPlayersComponent implements OnInit, OnDestroy {
  public nflData: any;
  public loading = false;

  constructor(
    private allPlayersService: AllPlayersService,
    private socketService: SocketService
  ) {}

  ngOnInit() {
    // Connect web socket to Socket IO
    this.socketService.connectSocket();
    
    this.getPrimaryNflData();
  }

  ngOnDestroy() {
    this.socketService.disconnectSocket();
  }

  private getPrimaryNflData(): void {
    this.loading = true;

    this.allPlayersService
      .getOriginalApi()
      .pipe(
        catchError(error => of(error)),
        map((post: Post) => post)
      )
      .subscribe(nflData => {
        this.nflData = nflData;
        this.loading = false;
      });
  }
}
