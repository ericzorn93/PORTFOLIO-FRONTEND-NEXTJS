import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { retry } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AllPlayersService {
  constructor(private httpService: HttpClient) {}

  public getOriginalApi(): Observable<any> {
    return this.httpService
      .get("https://www.api-football.com/demo/")
      .pipe(retry(2));
  }
}
