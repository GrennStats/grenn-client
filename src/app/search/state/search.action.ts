import {Action} from "@ngrx/store";
import {type} from "../../state-utility/action";
import {ErrorState} from "../../state-utility/entry/error";
import {LoadMultipleAction, LoadMultipleCompleteAction, LoadAction, LoadCompleteAction} from "../../state-utility/load/action";
import {SearchPlayerResponse} from "./search.resource";
import {SearchRanking} from "@grenn/contract";

export const SearchActionTypes = {
  SEARCH_HISTORY: type("[Search] Set History"),

  SEARCH_PLAYER: type("[Search] Search"),
  SEARCH_PLAYER_COMPLETE: type("[Search] Search Complete"),
  SEARCH_PLAYER_ONCE: type("[Search] Search Once"),

  LOAD_SEARCH_RANKING: type("[Search] Ranking Load"),
  LOAD_SEARCH_RANKING_COMPLETE: type("[Search] Ranking Load Complete"),
  LOAD_SEARCH_RANKING_ONCE: type("[Search] Ranking Load Once"),

  OPEN_SUGGESTION: type("[Search] Suggestion Box Open"),
  CLOSE_SUGGESTION: type("[Search] Suggestion Box Close"),
}

export class SearchPlayerHistoryAction implements Action {
  public type = SearchActionTypes.SEARCH_HISTORY;

  constructor(public playerId: string) {}
}

// Search
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

// Ranking
export class LoadSearchRankingAction implements LoadAction {
  public type = SearchActionTypes.LOAD_SEARCH_RANKING;
}

export class LoadSearchRankingOnceAction implements Action {
  public type = SearchActionTypes.LOAD_SEARCH_RANKING_ONCE;
}

export class LoadSearchRankingCompleteAction implements LoadCompleteAction<SearchRanking> {
  public type = SearchActionTypes.LOAD_SEARCH_RANKING_COMPLETE;

  constructor(public payload: SearchRanking, public error?: ErrorState) {}
}

// Suggestion Box
export class OpenSuggestionBoxAction implements Action {
  public type = SearchActionTypes.OPEN_SUGGESTION;
}

export class CloseSuggestionBoxAction implements Action {
  public type = SearchActionTypes.CLOSE_SUGGESTION;
}
