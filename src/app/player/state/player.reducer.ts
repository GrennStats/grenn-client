import {combineReducers} from "@ngrx/store";
import {Map} from "immutable";
import {EntryState} from "../../state-utility/entry/state";
import {PlayerActionTypes} from "./player.action";
import {createMultipleLoadReducer} from "../../state-utility/load/reducer";
import {compose} from "@ngrx/store";
import {createLoadSelector} from "../../state-utility/load/selector";
import {State} from "../../reducers";
import {CurrentStats, StatsTimeline} from "@grenn/contract";

export type PlayerStateCurrentStats = Map<number, EntryState<CurrentStats>>;
export type PlayerStateTimelineStats = Map<number, EntryState<StatsTimeline>>;

export interface PlayerStatsState {
  currentStats: PlayerStateCurrentStats;
  timelineStats: PlayerStateTimelineStats;
}

const reducers = combineReducers({
  currentStats: createMultipleLoadReducer(
    PlayerActionTypes.LOAD_PLAYER_CURRENT_STATS,
    PlayerActionTypes.LOAD_PLAYER_CURRENT_STATS_COMPLETE
  ),
});

export function playerReducer(state: PlayerStatsState, action) {
  return reducers(state, action);
}

function getCurrentStatsEntity(state: PlayerStatsState): PlayerStateCurrentStats {
  return state.currentStats;
}

function getTimelineStatsEntity(state: PlayerStatsState): PlayerStateTimelineStats {
  return state.timelineStats;
}

function getPlayerState(state: State): PlayerStatsState {
  return state.player;
}

export const getStats = createLoadSelector<PlayerStateCurrentStats>(compose(
  getCurrentStatsEntity,
  getPlayerState
));

export const getTimelineStats = createLoadSelector<PlayerStateTimelineStats>(compose(
  getTimelineStatsEntity,
  getPlayerState
));
