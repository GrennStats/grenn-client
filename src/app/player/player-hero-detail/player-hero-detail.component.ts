import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {State} from "../../reducers";
import {Store} from "@ngrx/store";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HeroStatFactory} from "../../hero/hero-stat.factory";
import {TagStatFactory} from "../../hero/tag-stat.factory";
import {PlayerStats} from "../state/player.resource";
import {Observable} from "rxjs/Observable";
import {getStats} from "../state/player.reducer";

@Component({
  selector: "app-player-hero-detail",
  templateUrl: "./player-hero-detail.component.html",
  styleUrls: ["./player-hero-detail.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerHeroDetailComponent implements OnInit {

  public stats$: Observable<PlayerStats>;
  public hero$: Observable<string>;
  public playerId$: Observable<string>;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private heroStat: HeroStatFactory,
    private tagStat: TagStatFactory
  ) {}

  public ngOnInit() {
    this.playerId$ = this.route.parent.paramMap
      .map((params: ParamMap) => {
        return params.get("playerId");
      });

    this.hero$ = this.route.paramMap
      .map((params: ParamMap) => {
        return params.get("hero");
      });

    this.stats$ = this.playerId$
      .switchMap(playerId => {
        return this.store.select(getStats(playerId))
          .filter(data => Boolean(data));
      });
  }
}
