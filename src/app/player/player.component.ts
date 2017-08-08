import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {PlayerResource, PlayerStats} from "./state/player.resource";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {State} from "../reducers";
import {Store} from "@ngrx/store";
import {LoadPlayerStatsOnceAction, LoadPlayerStatsAction} from "./state/player.action";
import {getStats} from "./state/player.reducer";
import {round2Digits} from "../math.utility";
import {findKey, sortBy} from "lodash";

export interface Hero {
  name: string;
  image: string;
}

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit {
  // public heroes: Hero[] = require("./heroes.json");
  public stats$: Observable<PlayerStats>;
  public playerId$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private player: PlayerResource,
    private store: Store<State>
  ) {}

  public ngOnInit() {
    this.playerId$ = this.route.paramMap
      .map(params => {
        return params.get("playerId");
      });

    this.stats$ = this.playerId$
      .switchMap(playerId => {
        this.store.dispatch(new LoadPlayerStatsAction(playerId));

        return this.store.select(getStats(playerId))
          .filter(data => Boolean(data));
      });
  }

  protected getHeroKeys(stats: PlayerStats) {
    if (!stats) {
      return [];
    }

    return Object.keys(stats)
      .filter(hero => hero !== "all");
  }

  public getMostPlayedHero(stats: PlayerStats): string {
    if (!stats) {
      return null;
    }

    const heroKeys = this.getHeroKeys(stats);

    return sortBy(heroKeys, heroKey => {
      return stats[heroKey].total.total_games;
    }).pop();
  }

  public getPlayerStats(stats: PlayerStats) {
    if (!stats) {
      return null;
    }

    const kda = (stats.all.total.kills + stats.all.total.assists) / Math.max(1, stats.all.total.deaths);
    const wins = stats.all.total.wins || 0;
    const winrate = round2Digits(wins / stats.all.total.total_games * 100);

    return {
      skill: (stats.all.total.motiga_skill * 100).toFixed(0),
      kda: round2Digits(kda),
      winrate: `${winrate.toFixed(0)}%`
    };
  }
}
