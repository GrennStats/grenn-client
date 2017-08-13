import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {PlayerStats, TotalStats, Stats} from "../state/player.resource";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {State} from "../../reducers";
import {getStats} from "../state/player.reducer";
import {ParamMap, ActivatedRoute} from "@angular/router";
import {round2Digits, getPercentage} from "../../math.utility";
import {HeroStatFactory, HeroStat} from "../../hero/hero-stat.factory";
import {sortStatsByMostPlayed, sortStatsByTag, sortStatsByTime} from "../../hero/hero.sort";
import {getHeroTags, TagStatFactory, TagStat} from "../../hero/tag-stat.factory";

@Component({
  selector: "app-player-profile",
  templateUrl: "./player-profile.component.html",
  styleUrls: ["./player-profile.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerProfileComponent implements OnInit {
  public stats$: Observable<PlayerStats>;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private heroStat: HeroStatFactory,
    private tagStat: TagStatFactory
  ) {}

  public ngOnInit() {
    this.stats$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        const playerId = params.get("playerId");

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

  public getHeroStats(stats: PlayerStats): HeroStat[] {
    const heroes = this.getHeroKeys(stats);
    const data = heroes.map(hero => this.heroStat.getHeroStat(hero, stats[hero]));

    return sortStatsByMostPlayed(data);
  }

  public getTagStats(stats: PlayerStats): TagStat[] {
    const tags = getHeroTags();

    const stat = tags.map(tag => {
      return this.tagStat.getStatsForTag(tag, stats);
    }).filter(x => x.games.total);

    return sortStatsByTime(stat);
  }
}
