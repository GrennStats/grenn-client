import * as fromRouter from "@ngrx/router-store";
import {playerReducer, PlayerStatsState} from "./player/state/player.reducer";
import {searchReducer, SearchState} from "./search/state/search.reducer";

export interface State {
    router: fromRouter.RouterReducerState;
    search: SearchState;
    player: PlayerStatsState;
}

export const reducers = {
    router: fromRouter.routerReducer,
    player: playerReducer,
    search: searchReducer
};
