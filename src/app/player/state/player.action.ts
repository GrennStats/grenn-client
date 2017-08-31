import {Action} from "@ngrx/store";
import {type} from "../../state-utility/action";
import {LoadMultipleAction, LoadMultipleCompleteAction} from "../../state-utility/load/action";
import {ErrorState} from "../../state-utility/entry/error";
import {CurrentStats, StatsTimeline} from "@grenn/contract";

export const PlayerActionTypes = {
  LOAD_PLAYER_CURRENT_STATS: type("[Player] Load Current Stats"),
  LOAD_PLAYER_CURRENT_STATS_COMPLETE: type("[Player] Load Current Stats Complete"),
  LOAD_PLAYER_CURRENT_STATS_ONCE: type("[Player] Load Current Stats Once"),

  LOAD_PLAYER_TIMELINE_STATS: type("[Player] Load Timeline Stats"),
  LOAD_PLAYER_TIMELINE_STATS_COMPLETE: type("[Player] Load Timeline Stats Complete"),
  LOAD_PLAYER_TIMELINE_STATS_ONCE: type("[Player] Load Timeline Stats Once"),
};

export class LoadPlayerCurrentStatsAction implements LoadMultipleAction {
  public type = PlayerActionTypes.LOAD_PLAYER_CURRENT_STATS;

  constructor(public playerId: string) {}

  public get id(): string { return this.playerId; }
}

export class LoadPlayerCurrentStatsOnceAction implements LoadMultipleAction {
  public type = PlayerActionTypes.LOAD_PLAYER_CURRENT_STATS_ONCE;

  constructor(public playerId: string) {}

  public get id(): string { return this.playerId; }
}

export class LoadPlayerCurrentStatsCompleteAction implements LoadMultipleCompleteAction<CurrentStats> {
  public type = PlayerActionTypes.LOAD_PLAYER_CURRENT_STATS_COMPLETE;

  constructor(public playerId: string, public payload: CurrentStats, public error?: ErrorState) {}

  public get id(): string { return this.playerId; }
}

// Timeline
export class LoadPlayerTimelineStatsAction implements LoadMultipleAction {
  public type = PlayerActionTypes.LOAD_PLAYER_TIMELINE_STATS;

  constructor(public playerId: string) {}

  public get id(): string { return this.playerId; }
}

export class LoadPlayerTimelineStatsOnceAction implements LoadMultipleAction {
  public type = PlayerActionTypes.LOAD_PLAYER_TIMELINE_STATS_ONCE;

  constructor(public playerId: string) {}

  public get id(): string { return this.playerId; }
}

export class LoadPlayerTimelineStatsCompleteAction implements LoadMultipleCompleteAction<StatsTimeline> {
  public type = PlayerActionTypes.LOAD_PLAYER_TIMELINE_STATS_COMPLETE;

  constructor(public playerId: string, public payload: StatsTimeline, public error?: ErrorState) {}

  public get id(): string { return this.playerId; }
}
