import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AppConfig} from "../../app.config";
import {SearchRanking} from "@grenn/contract";
import {of} from "rxjs/observable/of";
import "rxjs/add/operator/delay";
import {SearchPlayerResponse, SearchResource, SearchPlayerObject} from "./search.resource";

export const searchPlayerResponse: SearchPlayerResponse = [
  {
    rank: 1,
    favorite_hero: "tripp",
    account_level: 30,
    gamertag: "Itrulia#2544",
    total_wins: 3000,
    win_rate: "50%",
    skill_rating: "8000",
  },
  {
    rank: 2,
    favorite_hero: "tripp",
    account_level: 30,
    gamertag: "Petsch#2544",
    total_wins: 3000,
    win_rate: "50%",
    skill_rating: "7500",
  },
  {
    rank: 3,
    favorite_hero: "tripp",
    account_level: 30,
    gamertag: "ShooTeX#2544",
    total_wins: 3000,
    win_rate: "50%",
    skill_rating: "7200",
  }
];

export const playerSearchRanking: SearchRanking = {
  "Itrulia#2544": 1,
  "Petsch#2544": 2,
  "ShooTex#2544": 3
};

@Injectable()
export class SearchResourceMock extends SearchResource {
  public searchPlayer(playerId: string): Observable<SearchPlayerResponse> {
    return of(searchPlayerResponse).delay(300);
  }

  public getRanking(): Observable<SearchRanking> {
    return of(playerSearchRanking).delay(300);
  }
}
