import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AppConfig} from "../../app.config";

export interface SearchPlayerObject {
  rank: number;
  favorite_hero: string;
  account_level: number;
  gamertag: string;
  total_wins: number;
  win_rate: string;
  skill_rating: string;
}

export type SearchPlayerResponse = SearchPlayerObject[];

@Injectable()
export class SearchResource {
  constructor(private http: HttpClient, private config: AppConfig) {}

  public searchPlayer(playerId: string): Observable<SearchPlayerResponse> {
    const encodedId = playerId.replace("#", "%23");

    return this.http.get<any>(`${this.config.baseUrl}/search/${encodedId}`)
      .map(data => data.data);
  }
}
