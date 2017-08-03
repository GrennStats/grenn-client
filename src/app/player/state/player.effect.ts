import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/catch";
import {of} from "rxjs/observable/of";
import {Action, Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {Effect, Actions} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {createErrorObject} from "../../state-utility/entry/error";
import {State} from "../../reducers";
import {LoadPlayerStatsAction, LoadPlayerStatsCompleteAction, PlayerActionTypes, LoadPlayerStatsOnceAction} from "./player.action";
import {PlayerResource} from "./player.resource";
import {getStats} from "./player.reducer";

@Injectable()
export class PlayerEffects {
  constructor(
    private actions$: Actions,
    private resource: PlayerResource,
    private state$: Store<State>
  ) {}

  @Effect()
  public loadStats$ = this.actions$.ofType(PlayerActionTypes.LOAD_PLAYER_STATS)
    .mergeMap((action: LoadPlayerStatsAction) => {
      return this.resource.getPlayerStats(action.playerId)
        .map(data => new LoadPlayerStatsCompleteAction(action.playerId, data))
        .catch(error => of(new LoadPlayerStatsCompleteAction(action.playerId, null, createErrorObject(error))));
    });


  @Effect()
  public loadStatsOnce$ = this.actions$.ofType(PlayerActionTypes.LOAD_PLAYER_STATS_ONCE)
    .mergeMap((action: LoadPlayerStatsOnceAction) => {
      return this.state$.select(getStats(action.playerId))
        .first()
        .filter(data => !Boolean(data) || data.error)
        .map(user => action);
    })
    .map((action: LoadPlayerStatsOnceAction) => new LoadPlayerStatsAction(action.playerId));
}
