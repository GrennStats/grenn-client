import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {AppConfig} from "../../app.config";

export interface Stats {
  power_score: number;
  kills: number;
  deaths: number;
  guardian_damage: number;
  kda: number;
  wounds_given: number;
  summons: number;
  damage_dealt: number;
  assists: number;
  damage_soaked: number;
  medals_earned: number;
  time_played: number;
}

export interface TotalStats extends Stats {
  wins: number;
  losses: number;
  motiga_skill: number;
  rank: number;
  total_games: number;
}

export interface StatsType {
  total: TotalStats;
  avg: Stats;
  best: Stats;
}

export interface PlayerStats {
  all: StatsType;
  aisling: StatsType;
  beckett: StatsType;
  charnok: StatsType;
  griselma: StatsType;
  hK206: StatsType;
  imani: StatsType;
  knossos: StatsType;
  mozu: StatsType;
  pakko: StatsType;
  ramsay: StatsType;
  margrave: StatsType;
  tripp: StatsType;
  tyto: StatsType;
  sven: StatsType;
  vadasi: StatsType;
  voden: StatsType;
  wu: StatsType;
  xenobia: StatsType;
  zandora: StatsType;
}

@Injectable()
export class PlayerResource {
  constructor(private http: HttpClient, private config: AppConfig) {}

  public getPlayerStats(playerId: string): Observable<PlayerStats> {
    const encodedId = playerId.replace("#", "%23");

    return this.http.get<any>(`${this.config.baseUrl}/player/${encodedId}`)
      .map(data => data.data[playerId]);
  }
}
