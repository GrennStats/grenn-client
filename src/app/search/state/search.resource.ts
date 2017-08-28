import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AppConfig} from "../../app.config";
import {SearchRanking} from "@grenn/contract";

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

    return this.http.get<SearchPlayerResponse>(`${this.config.baseUrl}/player/${encodedId}/query`);
  }

  public getRanking(): Observable<SearchRanking> {
    return this.http.get<SearchRanking>(`${this.config.baseUrl}/player/search`);
  }
}
