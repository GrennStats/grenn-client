import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {AppConfig} from "../../app.config";
import {CurrentStats} from "@grenn/contract";

@Injectable()
export class PlayerResource {
  constructor(private http: HttpClient, private config: AppConfig) {}

  public getPlayerStats(playerId: string): Observable<CurrentStats> {
    const encodedId = playerId.replace("#", "%23");

    return this.http.get<any>(`${this.config.baseUrl}/player/${encodedId}/stats/current`);
  }
}
