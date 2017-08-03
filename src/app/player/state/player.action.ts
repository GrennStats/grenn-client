import {Action} from "@ngrx/store";
import {type} from "../../state-utility/action";
import {LoadMultipleAction, LoadMultipleCompleteAction} from "../../state-utility/load/action";
import {PlayerStats} from "./player.resource";
import {ErrorState} from "../../state-utility/entry/error";

export const PlayerActionTypes = {
  LOAD_PLAYER_STATS: type("[Player] Load Stats"),
  LOAD_PLAYER_STATS_COMPLETE: type("[Player] Load Stats Complete"),
  LOAD_PLAYER_STATS_ONCE: type("[Player] Load Stats Once"),
}

export class LoadPlayerStatsAction implements LoadMultipleAction {
  public type = PlayerActionTypes.LOAD_PLAYER_STATS;

  constructor(public playerId: string) {}

  public get id(): string { return this.playerId; }
}

export class LoadPlayerStatsOnceAction implements LoadMultipleAction {
  public type = PlayerActionTypes.LOAD_PLAYER_STATS_ONCE;

  constructor(public playerId: string) {}

  public get id(): string { return this.playerId; }
}

export class LoadPlayerStatsCompleteAction implements LoadMultipleCompleteAction<PlayerStats> {
  public type = PlayerActionTypes.LOAD_PLAYER_STATS_COMPLETE;

  constructor(public playerId: string, public payload: PlayerStats, public error?: ErrorState) {}

  public get id(): string { return this.playerId; }
}
