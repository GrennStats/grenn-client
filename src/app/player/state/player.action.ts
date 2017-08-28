import {Action} from "@ngrx/store";
import {type} from "../../state-utility/action";
import {LoadMultipleAction, LoadMultipleCompleteAction} from "../../state-utility/load/action";
import {ErrorState} from "../../state-utility/entry/error";
import {CurrentStats} from "@grenn/contract";

export const PlayerActionTypes = {
  LOAD_PLAYER_CURRENT_STATS: type("[Player] Load Stats"),
  LOAD_PLAYER_CURRENT_STATS_COMPLETE: type("[Player] Load Stats Complete"),
  LOAD_PLAYER_CURRENT_STATS_ONCE: type("[Player] Load Stats Once"),
}

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
