import {combineReducers} from "@ngrx/store";
import {Map} from "immutable";
import {EntryState} from "../../state-utility/entry/state";
import {SearchActionTypes, SearchPlayerHistoryAction} from "./search.action";
import {createMultipleLoadReducer} from "../../state-utility/load/reducer";
import {compose} from "@ngrx/store";
import {SearchPlayerResponse} from "./search.resource";
import {State} from "../../reducers";
import {Observable} from "rxjs/Observable";
import {createLoadSelector} from "../../state-utility/load/selector";

export type SearchPlayer = EntryState<SearchPlayerResponse>;
export type SearchPlayerState = Map<number, EntryState<SearchPlayerResponse>>;

export interface SearchState {
  search: SearchPlayerState;
  history: string;
}

export function searchReducer(state: SearchState, action) {
  const reducer = combineReducers({
    search: createMultipleLoadReducer(
      SearchActionTypes.SEARCH_PLAYER,
      SearchActionTypes.SEARCH_PLAYER_COMPLETE
    ),
    history: (state: string, action: SearchPlayerHistoryAction) => {
      if (action.type === SearchActionTypes.SEARCH_HISTORY) {
        return action.playerId;
      }

      return state;
    }
  });

  return reducer(state, action);
}

function getSearchEntity(state: SearchState): SearchPlayerState {
  return state.search;
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

export const getSearchHistory = compose(
  getSearchHistoryEntity,
  getSearchState
);
