import {ActionReducer, Action} from "@ngrx/store";

export function queueReducers(reducers: ActionReducer<any>[]): ActionReducer<any> {
    return (state, action: Action) => {
        reducers.forEach(reducer => {
            state = reducer(state, action);
        });

        return state;
    };
}