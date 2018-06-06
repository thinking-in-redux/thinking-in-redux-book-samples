import {deepFreeze} from "../../utils/deepFreeze";

export function stateFreezer(reducer) {
  return function freezer(state, action) {
    // freeze the state and run the original reducer
    deepFreeze(state);
    const newState = reducer(state, action);

    // freeze and return the result state
    deepFreeze(newState);
    return newState;
  }
}
