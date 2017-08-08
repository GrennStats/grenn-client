import {Action} from "@ngrx/store";
import {type} from "../../state-utility/action";
import {ErrorState} from "../../state-utility/entry/error";
import {LoadMultipleAction, LoadMultipleCompleteAction} from "../../state-utility/load/action";
import {SearchPlayerResponse} from "./search.resource";

export const SearchActionTypes = {
  SEARCH_HISTORY: type("[Search] Set History"),
  SEARCH_PLAYER: type("[Search] Search"),
  SEARCH_PLAYER_COMPLETE: type("[Search] Search Complete"),
  SEARCH_PLAYER_ONCE: type("[Search] Search Once"),
}

export class SearchPlayerHistoryAction implements Action {
  public type = SearchActionTypes.SEARCH_HISTORY;

  constructor(public playerId: string) {}
}

export class SearchPlayerAction implements LoadMultipleAction {
  public type = SearchActionTypes.SEARCH_PLAYER;

  constructor(public playerId: string) {}

  public get id(): string { return this.playerId; }
}

export class SearchPlayerOnceAction implements LoadMultipleAction {
  public type = SearchActionTypes.SEARCH_PLAYER_ONCE;

  constructor(public playerId: string) {}

  public get id(): string { return this.playerId; }
}

export class SearchPlayerCompleteAction implements LoadMultipleCompleteAction<SearchPlayerResponse> {
  public type = SearchActionTypes.SEARCH_PLAYER_COMPLETE;

  constructor(public playerId: string, public payload: SearchPlayerResponse, public error?: ErrorState) {}

  public get id(): string { return this.playerId; }
}
