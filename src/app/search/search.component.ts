import "rxjs/add/operator/first";
import "rxjs/add/operator/filter";
import {Component, ChangeDetectionStrategy, OnInit} from "@angular/core";
import {SearchResource, SearchPlayerResponse} from "./state/search.resource";
import {Router} from "@angular/router";
import {SearchPlayerOnceAction} from "./state/search.action";
import {State} from "../reducers";
import {Store} from "@ngrx/store";
import {getSearch, getSearchHistory} from "./state/search.reducer";
import {Observable} from "rxjs/Observable";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  public playerName: string;
  public history$: Observable<string>;

  constructor(private store: Store<State>, private router: Router) {}

  public ngOnInit(): void {
    this.history$ = this.store.select(getSearchHistory);
    this.history$.first().subscribe(playerName => this.playerName = playerName);
  }

  public search(playerName: string) {
    this.store.dispatch(new SearchPlayerOnceAction(playerName));
    this.router.navigate(["/search", playerName]);
  }
}
