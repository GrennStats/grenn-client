import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {PlayerResource} from "./state/player.resource";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {State} from "../reducers";
import {Store} from "@ngrx/store";
import {LoadPlayerCurrentStatsOnceAction, LoadPlayerCurrentStatsAction} from "./state/player.action";
import {getStats} from "./state/player.reducer";
import {findKey, sortBy} from "lodash";
import {CurrentStats} from "@grenn/contract";

export interface Hero {
  name: string;
  image: string;
}

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit {
  public stats$: Observable<CurrentStats>;
  public playerId$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
        this.store.dispatch(new LoadPlayerCurrentStatsAction(playerId));

        return this.store.select(getStats(playerId))
          .filter(data => Boolean(data))
          .do(data => {
            if (data.error) {
              const hashIndex = playerId.indexOf("#");
              const playerIdSearch = playerId.substr(0, hashIndex === -1 ? 0 : hashIndex);

              this.router.navigate(["/search", playerIdSearch]);
            }
          })
          .filter(data => !data.error);
      });
  }

  public reloadData() {
    this.playerId$.first().subscribe(playerId => {
      this.store.dispatch(new LoadPlayerCurrentStatsAction(playerId));
    });
  }

  protected getHeroKeys(stats: CurrentStats) {
    if (!stats) {
      return [];
    }

    return Object.keys(stats)
      .filter(hero => hero !== "all");
  }

  public getMostPlayedHero(stats: CurrentStats): string {
    if (!stats) {
      return null;
    }

    const heroKeys = this.getHeroKeys(stats);

    return sortBy(heroKeys, heroKey => {
      return stats[heroKey].total.total_games;
    }).pop();
  }

  public getPlayerStats(stats: CurrentStats) {
    if (!stats) {
      return null;
    }

    const kda = (stats.all.total.kills + stats.all.total.assists) / Math.max(1, stats.all.total.deaths);
    const wins = stats.all.total.wins || 0;
    const winrate = wins / stats.all.total.total_games * 100;

    return {
      skill: (stats.all.total.motiga_skill * 100).toFixed(0),
      kda: kda,
      winrate: winrate
    };
  }
}
