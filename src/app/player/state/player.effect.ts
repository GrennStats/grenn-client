import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/catch";
import {of} from "rxjs/observable/of";
import {Action, Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {Effect, Actions} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {createErrorObject} from "../../state-utility/entry/error";
import {State} from "../../reducers";
import {
  LoadPlayerCurrentStatsAction,
  LoadPlayerCurrentStatsCompleteAction,
  PlayerActionTypes,
  LoadPlayerCurrentStatsOnceAction
} from "./player.action";
import {PlayerResource} from "./player.resource";
import {getStats, getTimelineStats} from "./player.reducer";
import {LoadPlayerTimelineStatsAction, LoadPlayerTimelineStatsCompleteAction, LoadPlayerTimelineStatsOnceAction} from "./player.action";

@Injectable()
export class PlayerEffects {
  constructor(
    private actions$: Actions,
    private resource: PlayerResource,
    private state$: Store<State>
  ) {}

  @Effect()
  public loadStats$ = this.actions$.ofType(PlayerActionTypes.LOAD_PLAYER_CURRENT_STATS)
    .mergeMap((action: LoadPlayerCurrentStatsAction) => {
      return this.resource.getPlayerStats(action.playerId)
        .map(data => new LoadPlayerCurrentStatsCompleteAction(action.playerId, data))
        .catch(error => of(new LoadPlayerCurrentStatsCompleteAction(action.playerId, null, createErrorObject(error))));
    });


  @Effect()
  public loadStatsOnce$ = this.actions$.ofType(PlayerActionTypes.LOAD_PLAYER_CURRENT_STATS_ONCE)
    .mergeMap((action: LoadPlayerCurrentStatsOnceAction) => {
      return this.state$.select(getStats(action.playerId))
        .first()
        .filter(data => !Boolean(data) || data.error)
        .map(user => action);
    })
    .map((action: LoadPlayerCurrentStatsOnceAction) => new LoadPlayerCurrentStatsAction(action.playerId));

  @Effect()
  public loadTimelineStats$ = this.actions$.ofType(PlayerActionTypes.LOAD_PLAYER_TIMELINE_STATS)
    .mergeMap((action: LoadPlayerTimelineStatsAction) => {
      return this.resource.getPlayerTimelineStats(action.playerId)
        .map(data => new LoadPlayerTimelineStatsCompleteAction(action.playerId, data))
        .catch(error => of(new LoadPlayerTimelineStatsCompleteAction(action.playerId, null, createErrorObject(error))));
    });


  @Effect()
  public loadTimelineStatsOnce$ = this.actions$.ofType(PlayerActionTypes.LOAD_PLAYER_TIMELINE_STATS_ONCE)
    .mergeMap((action: LoadPlayerTimelineStatsOnceAction) => {
      return this.state$.select(getTimelineStats(action.playerId))
        .first()
        .filter(data => !Boolean(data) || data.error)
        .map(user => action);
    })
    .map((action: LoadPlayerTimelineStatsOnceAction) => new LoadPlayerTimelineStatsAction(action.playerId));
}
