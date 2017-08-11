import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {Store} from "@ngrx/store";
import {State} from "../../reducers";
import {ActivatedRoute, Router} from "@angular/router";
import {getSearch, SearchPlayer} from "../state/search.reducer";
import {SearchPlayerOnceAction, SearchPlayerHistoryAction} from "../state/search.action";
import {Observable} from "rxjs/Observable";
import {SearchPlayerResponse, SearchPlayerObject} from "../state/search.resource";
import "rxjs/add/operator/skip";
import {sortBy} from "lodash";

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

      this.playerId$.first().subscribe(playerId => {
        if (playerId.length < 4) {
          this.router.navigate(["/"]);
        }
      });

    this.search$ = this.playerId$
      .switchMap(playerId => {
        this.store.dispatch(new SearchPlayerHistoryAction(playerId));
        this.store.dispatch(new SearchPlayerOnceAction(playerId));

        return this.store.select(getSearch(playerId))
          .filter(data => Boolean(data));
      })
      .map(search => {
        if (!search.entry) {
          return search;
        }

        return {
          ...search,
          entry: sortBy(search.entry, (entry: SearchPlayerObject) => -entry.total_wins)
        }
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
