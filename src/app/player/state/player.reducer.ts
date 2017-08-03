import {combineReducers} from "@ngrx/store";
import {Map} from "immutable";
import {PlayerStats} from "./player.resource";
import {EntryState} from "../../state-utility/entry/state";
import {PlayerActionTypes} from "./player.action";
import {createMultipleLoadReducer} from "../../state-utility/load/reducer";
import {compose} from "@ngrx/store";
import {createLoadSelector} from "../../state-utility/load/selector";
import {State} from "../../reducers";

export interface PlayerStateStats extends Map<number, EntryState<PlayerStats>> {}

export interface PlayerStatsState {
  stats: PlayerStateStats;
}

export const playerReducer = compose(combineReducers)({
  stats: createMultipleLoadReducer(
    PlayerActionTypes.LOAD_PLAYER_STATS,
    PlayerActionTypes.LOAD_PLAYER_STATS_COMPLETE
  ),
});

function getStatsEntity(state: PlayerStatsState): PlayerStateStats {
  return state.stats;
}

function getPlayerState(state: State): PlayerStatsState {
  return state.player;
}

export const getStats = createLoadSelector<PlayerStateStats>(compose(
  getStatsEntity,
  getPlayerState
));
