import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {AppConfig} from "../../app.config";
import {CurrentStats, StatsTimeline} from "@grenn/contract";

@Injectable()
export class PlayerResource {
  constructor(private http: HttpClient, private config: AppConfig) {}

  public getPlayerStats(playerId: string): Observable<CurrentStats> {
    const encodedId = playerId.replace("#", "%23");

    return this.http.get<CurrentStats>(`${this.config.baseUrl}/player/${encodedId}/stats/current`);
  }

  public getPlayerTimelineStats(playerId: string): Observable<StatsTimeline> {
    const encodedId = playerId.replace("#", "%23");

    return this.http.get<StatsTimeline>(`${this.config.baseUrl}/player/${encodedId}/stats/timeline`);
  }
}
