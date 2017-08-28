import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";
import {State} from "../../reducers";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {EntryState} from "../../state-utility/entry/state";
import {SearchRanking} from "@grenn/contract";
import {getSearchRanking} from "../state/search.reducer";
import {LoadSearchRankingOnceAction} from "../state/search.action";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {sortAndLimitRanking} from "./suggestion-box.filter";

@Component({
  selector: "suggestion-box",
  templateUrl: "./suggestion-box.component.html",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuggestionBoxComponent implements OnInit {
  public amount$: Observable<number> = new BehaviorSubject(5);
  public ranking$: Observable<string[]>;

  /**
   * @param store
   */
  constructor(private store: Store<State>) {
    this.store.dispatch(new LoadSearchRankingOnceAction);
  }

  public ngOnInit() {
    this.ranking$ = this.store.select(getSearchRanking)
      .filter(data => Boolean(data && data.entry))
      .map(data => data.entry)
      .map(sortAndLimitRanking);
  }
}
