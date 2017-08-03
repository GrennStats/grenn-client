import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/catch";
import {of} from "rxjs/observable/of";
import {Action, Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {Effect, Actions} from "@ngrx/effects";
import {SearchActionTypes, SearchPlayerAction, SearchPlayerCompleteAction, SearchPlayerOnceAction} from "./search.action";
import {Injectable} from "@angular/core";
import {SearchResource} from "./search.resource";
import {createErrorObject} from "../../state-utility/entry/error";
import {State} from "../../reducers";
import {getSearch} from "./search.reducer";

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
  public searchOnce$ = this.actions$.ofType(SearchActionTypes.SEARCH_PLAYER_ONCE)
    .mergeMap((action: SearchPlayerOnceAction) => {
      return this.state$.select(getSearch(action.playerId))
        .first()
        .filter(data => !Boolean(data))
        .map(user => action);
    })
    .map((action: SearchPlayerOnceAction) => new SearchPlayerAction(action.playerId));
}
