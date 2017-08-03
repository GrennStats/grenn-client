import {ErrorState} from "../entry/error";
import {Action} from "@ngrx/store";

export interface LoadAction extends Action {}

export interface LoadCompleteAction<T> extends Action {
    payload: T;
    error?: ErrorState;
}

export interface LoadMultipleAction extends LoadAction {
    id: string;
}

export interface LoadNestedMultipleAction extends LoadMultipleAction {
    id2: string;
}

export interface LoadMultipleCompleteAction<T> extends LoadCompleteAction<T> {
    id: string;
}

export interface LoadNestedMultipleCompleteAction<T> extends LoadMultipleCompleteAction<T> {
    id2: string;
}
