import {combineReducers} from "@ngrx/store";
import {Map} from "immutable";
import {EntryState} from "../../state-utility/entry/state";
import {PlayerActionTypes} from "./player.action";
import {createMultipleLoadReducer} from "../../state-utility/load/reducer";
import {compose} from "@ngrx/store";
import {createLoadSelector} from "../../state-utility/load/selector";
import {State} from "../../reducers";
import {CurrentStats} from "@grenn/contract";

export type PlayerStateStats = Map<number, EntryState<CurrentStats>>;

export interface PlayerStatsState {
  currentStats: PlayerStateStats;
}

export function playerReducer(state: PlayerStatsState, action) {
  return combineReducers({
    currentStats: createMultipleLoadReducer(
      PlayerActionTypes.LOAD_PLAYER_CURRENT_STATS,
      PlayerActionTypes.LOAD_PLAYER_CURRENT_STATS_COMPLETE
    ),
  })(state, action);
}

function getCurrentStatsEntity(state: PlayerStatsState): PlayerStateStats {
  return state.currentStats;
}

function getPlayerState(state: State): PlayerStatsState {
  return state.player;
}

export const getStats = createLoadSelector<PlayerStateStats>(compose(
  getCurrentStatsEntity,
  getPlayerState
));
