import "rxjs/add/operator/first";
import "rxjs/add/operator/filter";
import {Component, ChangeDetectionStrategy} from "@angular/core";
import {SearchResource, SearchPlayerResponse} from "./state/search.resource";
import {Router} from "@angular/router";
import {SearchPlayerOnceAction} from "./state/search.action";
import {State} from "../reducers";
import {Store} from "@ngrx/store";
import {getSearch} from "./state/search.reducer";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  constructor(private store: Store<State>, private router: Router) {}

  public search(playerName: string) {
    this.store.dispatch(new SearchPlayerOnceAction(playerName));
    this.router.navigate(["/search", playerName]);
  }
}
