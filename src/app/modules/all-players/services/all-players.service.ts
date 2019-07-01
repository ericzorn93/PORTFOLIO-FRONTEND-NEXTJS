import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { retry, take } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AllPlayersService {
  constructor(private httpService: HttpClient) {}

  public getOriginalApi(): Observable<any> {
    return this.httpService
      .get("https://jsonplaceholder.typicode.com/posts")
      .pipe(
        retry(2),
        take(3)
      );
  }
}
