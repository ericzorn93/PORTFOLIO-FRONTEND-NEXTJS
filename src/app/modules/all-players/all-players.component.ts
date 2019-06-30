import { Component, OnInit } from "@angular/core";

import { AllPlayersService } from "./services/all-players.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Component({
  selector: "app-all-players",
  templateUrl: "./all-players.component.html",
  styleUrls: ["./all-players.component.scss"]
})
export class AllPlayersComponent implements OnInit {
  public nflData: any;
  public loading = false;

  constructor(private allPlayersService: AllPlayersService) {}

  ngOnInit() {
    this.getPrimaryNflData();
  }

  private getPrimaryNflData(): void {
    this.loading = true;

    this.allPlayersService
      .getOriginalApi()
      .pipe(catchError(error => of(error)))
      .subscribe(nflData => {
        this.nflData = nflData;
        this.loading = false;
      });
  }
}
