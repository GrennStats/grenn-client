import {State} from "../../reducers";
import {Map} from "immutable";

export function createLoadSelector<T>(stream) {
    return (id: string) => {
      return (state: State) => {
            return stream(state).get(id);
        };
    };
}
