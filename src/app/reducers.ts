import * as fromRouter from "@ngrx/router-store";
import {playerReducer, PlayerStatsState} from "./player/state/player.reducer";
import {searchReducer, SearchState} from "./search/state/search.reducer";
import {analyticsMetaReducer} from "./app.analytics";

export interface State {
    router: fromRouter.RouterReducerState;
    search: SearchState;
    player: PlayerStatsState;
}

export const reducers = {
    router: analyticsMetaReducer(fromRouter.routerReducer),
    player: playerReducer,
    search: searchReducer
};
