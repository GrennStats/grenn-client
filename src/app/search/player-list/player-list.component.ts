import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {Store} from "@ngrx/store";
import {State} from "../../reducers";
import {ActivatedRoute, Router} from "@angular/router";
import {getSearch, SearchPlayer} from "../state/search.reducer";
import {SearchPlayerOnceAction} from "../state/search.action";
import {Observable} from "rxjs/Observable";
import {SearchPlayerResponse} from "../state/search.resource";
import "rxjs/add/operator/skip";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
  styleUrls: ["./player-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerListComponent implements OnInit {
  public playerId$: Observable<string>;
  public search$: Observable<SearchPlayer>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    private router: Router
  ) {}

  public ngOnInit() {
    this.playerId$ = this.route.paramMap
      .map(params => {
        return params.get("playerId");
      });

    this.search$ = this.playerId$
      .switchMap(playerId => {
        this.store.dispatch(new SearchPlayerOnceAction(playerId));

        return this.store.select(getSearch(playerId))
          .filter(data => Boolean(data));
      });

    this.search$
      .skip(1)
      .filter(x => Boolean(x.entry))
      .first().subscribe(search => {
        this.redirect(search.entry);
      });
    }

  protected redirect(entry: SearchPlayerResponse) {
    if (entry.length === 1) {
      this.router.navigate(["/player", entry[0].gamertag]);
    }
  }
}
