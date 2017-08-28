import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/catch";
import {of} from "rxjs/observable/of";
import {Action, Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {Effect, Actions} from "@ngrx/effects";
import {
  SearchActionTypes,
  SearchPlayerAction,
  SearchPlayerCompleteAction,
  SearchPlayerOnceAction
} from "./search.action";
import {Injectable} from "@angular/core";
import {SearchResource} from "./search.resource";
import {createErrorObject} from "../../state-utility/entry/error";
import {State} from "../../reducers";
import {getSearch, getSearchRanking} from "./search.reducer";
import {not} from "ramda";
import {LoadSearchRankingOnceAction, LoadSearchRankingAction, LoadSearchRankingCompleteAction} from "./search.action";

@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private resource: SearchResource,
    private state$: Store<State>
  ) {}

  @Effect()
  public search$ = this.actions$.ofType(SearchActionTypes.SEARCH_PLAYER)
    .mergeMap((action: SearchPlayerAction) => {
      return this.resource.searchPlayer(action.playerId)
        .map(data => new SearchPlayerCompleteAction(action.playerId, data))
        .catch(error => of(new SearchPlayerCompleteAction(action.playerId, null, createErrorObject(error))));
    });

  @Effect()
  public loadSearchRanking$ = this.actions$.ofType(SearchActionTypes.LOAD_SEARCH_RANKING)
    .mergeMap((action: LoadSearchRankingAction) => {
      return this.resource.getRanking()
        .map(data => new LoadSearchRankingCompleteAction(data))
        .catch(error => of(new LoadSearchRankingCompleteAction(null, createErrorObject(error))));
    });

  @Effect()
  public searchOnce$ = this.actions$.ofType(SearchActionTypes.SEARCH_PLAYER_ONCE)
    .mergeMap((action: SearchPlayerOnceAction) => {
      return this.state$.select(getSearch(action.playerId))
        .first()
        .filter(not)
        .map(user => action);
    })
    .map(action => new SearchPlayerAction(action.playerId));

  @Effect()
  public loadRankingOnce$ = this.actions$.ofType(SearchActionTypes.LOAD_SEARCH_RANKING_ONCE)
    .mergeMap((action: LoadSearchRankingOnceAction) => {
      return this.state$.select(getSearchRanking)
        .first()
        .filter(not)
        .map(user => action);
    })
    .map(action => new LoadSearchRankingAction);
}
