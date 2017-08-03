import {ErrorState} from "./error";

export interface EntryState<T> {
    entry: T;
    loading: boolean;
    error: ErrorState;
}

export function createLoadingEntryState<T>(): EntryState<T> {
    return {
        entry: null,
        loading: true,
        error: null
    };
}