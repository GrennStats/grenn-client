import {combineReducers, Action} from "@ngrx/store";
import {Map} from "immutable";
import {EntryState} from "../../state-utility/entry/state";
import {SearchActionTypes, SearchPlayerHistoryAction} from "./search.action";
import {createMultipleLoadReducer, createLoadReducer} from "../../state-utility/load/reducer";
import {compose} from "@ngrx/store";
import {SearchPlayerResponse} from "./search.resource";
import {State} from "../../reducers";
import {Observable} from "rxjs/Observable";
import {createLoadSelector} from "../../state-utility/load/selector";
import {SearchRanking} from "@grenn/contract";

export type SearchPlayer = EntryState<SearchPlayerResponse>;
export type SearchPlayerState = Map<number, EntryState<SearchPlayerResponse>>;
export type SearchRankingState = EntryState<SearchRanking>;

export interface SearchState {
  search: SearchPlayerState;
  history: string;
  ranking: SearchRankingState;
  suggestion: boolean;
}

const reducer = combineReducers({
  search: createMultipleLoadReducer(
    SearchActionTypes.SEARCH_PLAYER,
    SearchActionTypes.SEARCH_PLAYER_COMPLETE
  ),
  history: (historyState: string, historyAction: SearchPlayerHistoryAction) => {
    if (historyAction.type === SearchActionTypes.SEARCH_HISTORY) {
      return historyAction.playerId;
    }

    return historyState;
  },
  ranking: createLoadReducer(
    SearchActionTypes.LOAD_SEARCH_RANKING,
    SearchActionTypes.LOAD_SEARCH_RANKING_COMPLETE
  ),
  suggestion: (state = false, action: Action) => {
    if (action.type === SearchActionTypes.CLOSE_SUGGESTION) {
      return false;
    }

    if (action.type === SearchActionTypes.OPEN_SUGGESTION) {
      return true;
    }

    return state;
  }
});

export function searchReducer(state: SearchState, action) {
  return reducer(state, action);
}

function getSearchEntity(state: SearchState): SearchPlayerState {
  return state.search;
}

function getRankingEntity(state: SearchState): SearchRankingState {
  return state.ranking;
}

function getSuggestionEntity(state: SearchState): boolean {
  return state.suggestion;
}

function getSearchHistoryEntity(state: SearchState): string {
  return state.history;
}

function getSearchState(state: State): SearchState {
  return state.search;
}

export const getSearch = createLoadSelector<SearchPlayer>(compose(
  getSearchEntity,
  getSearchState
));

export const getSearchRanking = compose(
  getRankingEntity,
  getSearchState
);

export const getSearchHistory = compose(
  getSearchHistoryEntity,
  getSearchState
);

export const showSuggestion = compose(
  getSuggestionEntity,
  getSearchState
);
