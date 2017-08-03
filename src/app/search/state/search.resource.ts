import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

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
  constructor(private http: HttpClient) {}

  public searchPlayer(playerId: string): Observable<SearchPlayerResponse> {
    // https://stats.gogigantic.com/en/gigantic-careers/playersearch/?username=itrulia&page_num=0&page_size=25&platform=arc
    const params = new HttpParams()
      .set("username", playerId)
      .set("page_num", "0")
      .set("page_size", "25")
      .set("platform", "arc");

    return this.http.get<any>(`https://stats.gogigantic.com/en/gigantic-careers/playersearch/`, {
      params: params
    }).map(data => data.data);
  }
}
