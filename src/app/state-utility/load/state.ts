import {LoadMultipleCompleteAction} from "./action";

export function setToLoading<T>(state: T): T {
    return Object.assign({}, state, {
        loading: true,
        error: null
    });
}

export function setToLoadingComplete<T>(state: T, action: LoadMultipleCompleteAction<any>): T {
    return Object.assign({}, state, {
        entry: action.payload,
        loading: false,
        error: action.error ? action.error : null
    });
}