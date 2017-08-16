import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {State} from "../../reducers";
import {Router} from "@angular/router";
import {getSearchHistory} from "../../search/state/search.reducer";
import {SearchPlayerOnceAction} from "../../search/state/search.action";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  public playerName: string;
  public history$: Observable<string>;

  constructor(private store: Store<State>, private router: Router) {}

  public ngOnInit(): void {
    this.history$ = this.store.select(getSearchHistory);
    this.history$.first().subscribe(playerName => this.playerName = playerName);
  }

  public search(playerName: string) {
    if (playerName.length < 4) {
      return;
    }

    this.store.dispatch(new SearchPlayerOnceAction(playerName));
    this.router.navigate(["/search", playerName]);
  }
}
