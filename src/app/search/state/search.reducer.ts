import {combineReducers} from "@ngrx/store";
import {Map} from "immutable";
import {EntryState} from "../../state-utility/entry/state";
import {SearchActionTypes} from "./search.action";
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
}

export const searchReducer = compose(combineReducers)({
  search: createMultipleLoadReducer(
    SearchActionTypes.SEARCH_PLAYER,
    SearchActionTypes.SEARCH_PLAYER_COMPLETE
  ),
});

function getSearchEntity(state: SearchState): SearchPlayerState {
  return state.search;
}

function getSearchState(state: State): SearchState {
  return state.search;
}

export const getSearch = createLoadSelector<SearchPlayer>(compose(
  getSearchEntity,
  getSearchState
));
