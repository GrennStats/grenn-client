import {
  LoadMultipleCompleteAction, LoadMultipleAction, LoadNestedMultipleAction,
  LoadNestedMultipleCompleteAction
} from "./action";
import {setToLoadingComplete, setToLoading} from "./state";
import {createLoadingEntryState} from "../entry/state";
import {ActionReducer, Action} from "@ngrx/store";
import {Map} from "immutable";

export function createNestedMultipleLoadReducer(loading: string, complete: string): ActionReducer<any> {
  return (state = Map(), action: Action) => {
    const actionTypes = [loading, complete];
    const reducer = createMultipleLoadReducer(
      loading,
      complete,
    );

    if (actionTypes.includes(action.type)) {
      const tmpAction: LoadNestedMultipleAction | LoadNestedMultipleCompleteAction<any> = action as any;
      return state.set(
        tmpAction.id,
        reducer(state.get(tmpAction.id), {...tmpAction, id: tmpAction.id2})
      );
    }

    return state;
  };
}

export function createMultipleLoadReducer(loading: string, complete: string): ActionReducer<any> {
  return (state = Map(), action: Action) => {
    if (action.type === loading) {
      const loadingAction = action as LoadMultipleAction;

      return state.set(
        loadingAction.id,
        setToLoading(state.get(loadingAction.id) || createLoadingEntryState())
      );
    }

    if (action.type === complete) {
      const completeAction = action as LoadMultipleCompleteAction<any>;

      return state.set(
        completeAction.id,
        setToLoadingComplete(state.get(completeAction.id), completeAction)
      );
    }

    return state;
  };
}

export function createLoadReducer(loading: string, complete: string): ActionReducer<any> {
  return (state = null, action: Action) => {
    const initialState = state ? state : createLoadingEntryState();

    if (action.type === loading) {
      return setToLoading(initialState);
    }

    if (action.type === complete) {
      return setToLoadingComplete(initialState, action as LoadMultipleCompleteAction<any>);
    }

    return state;
  };
}
